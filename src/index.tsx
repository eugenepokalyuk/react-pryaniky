import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './index.css';
import store from './store';

const container = document.getElementById('root')!;
const root = createRoot(container);

const theme = createTheme({
  typography: {
    fontFamily: [
      'ALS Gorizont Expanded Regular',
      'serif',
    ].join(','),
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);