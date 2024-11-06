import './index.css';
import React, { Suspense, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { useLocalStorage } from '@mantine/hooks';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';

const LazyApp = React.lazy(() => import('./App.tsx'));

function Main() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = useCallback((value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  }, [colorScheme, setColorScheme]);

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            colorScheme,
            colors: {
              dark: [
                '#d5d7e0', '#acaebf', '#8c8fa3', '#666980', '#4d4f66',
                '#34354a', '#202040', '#292951', '#0c0d21', '#01010a',
              ],
            },
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <LazyApp /> 
        </MantineProvider>
      </ColorSchemeProvider>
    </Suspense>
  );
}

createRoot(document.getElementById('root')!).render(<Main />);
