import { createTheme, Typography, withStyles } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Cabin, Roboto, serif, Times New Roman'
  },
  status: {
    danger: '#e53e3e'
  },
  palette: {
    primary: {
      main: '#fafafa',
      darker: '#053e85'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff'
    },
    text: {}
  }
});

// I have to do modulations in typescript to use these themes.
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}
