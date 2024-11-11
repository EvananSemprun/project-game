import './index.css';
import React, { Suspense, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { useLocalStorage } from '@mantine/hooks';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';

const LazyApp = React.lazy(() => import('./App.tsx'));

function Main() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark', 
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = useCallback(
    (value?: ColorScheme) => {
      setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    },
    [colorScheme, setColorScheme]
  );

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            colorScheme,
            colors: {
              dark: [
                '#d5d7e0', '#acaebf', '#8c8fa3', '#666980', '#4d4f66',
                '#34354a', '#0A0A0A', '#151515', '#0c0d21', '#01010a',
              ],
              light: [
                '#f0f4f8', '#dce0e6', '#c4c9d0', '#a4abb3', '#858993',
                '#5a5e64', '#0A0A0A', '#2c2e33', '#1f2124', '#111213',
              ],
            },
            primaryColor: colorScheme === 'dark' ? 'dark' : 'light',
            globalStyles: (theme) => ({
              body: {
                backgroundColor: colorScheme === 'light' ? '#FBFCD4' : theme.colorScheme === 'dark' ? '#1A1B1E' : '',
              },
            }),
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
