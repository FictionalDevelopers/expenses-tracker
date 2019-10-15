import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import store from './store';
import history from './history';

import App from './App';
import { purpleTheme } from './common/colorThemes/purpleTheme';

const root = document.querySelector('#root');

render(
  <Provider store={store}>
    <MuiThemeProvider theme={purpleTheme}>
      <Router history={history}>
        <App />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  root
);
