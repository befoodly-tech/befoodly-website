import { AppConfig } from './types/CommonType';
import { ThemeProvider } from '@emotion/react';
import { theme } from './ui/theme';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';

declare global {
  interface Window {
    config: AppConfig;
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
