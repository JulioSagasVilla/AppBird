import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import '@fontsource/poppins';

import './styles.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8e24aa', 
    },
    secondary: {
      main: '#ff6f00', 
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h3: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);