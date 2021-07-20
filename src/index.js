import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as RouterProvider } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import configureStore from './store';
import ThemeProvider from './components/ThemeProvider';
import LanguageProvider from './components/LanguageProvider';
import App from './components/App';

const store = configureStore();

const ROOT = (
  <ReduxProvider store={store}>
    <RouterProvider>
      <LanguageProvider>
        <ThemeProvider>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </LanguageProvider>
    </RouterProvider>
  </ReduxProvider>
);

ReactDOM.render(ROOT, document.getElementById('root'));
