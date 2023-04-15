import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import { AppConfig } from './types/AppConfig';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

declare global {
  interface Window {
    config: AppConfig;
  }
}

const config = window.config ?? {};

const initOptions = {
  url: config.BASE_URL
};

const theme = createTheme({
  typography: {
    fontFamily: 'Cabin, Roboto, serif, Times New Roman'
  },
  status: {
    danger: 'red'
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
