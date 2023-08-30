import { AppConfig } from './types/AppConfig';
import { ThemeProvider } from '@emotion/react';
import { theme } from './ui/theme';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';

declare global {
  interface Window {
    config: AppConfig;
  }
}

const config = window.config ?? {};

const initOptions = {
  url: config.BASE_URL
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
