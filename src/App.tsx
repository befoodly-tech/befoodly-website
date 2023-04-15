import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import { AppConfig } from './types/AppConfig';
import { ThemeProvider } from '@emotion/react';
import { theme } from './ui/theme';

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
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
