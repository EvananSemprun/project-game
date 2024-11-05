import './index.css'
import App from './App.tsx'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById('root')!).render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <App />
  </MantineProvider>
)
