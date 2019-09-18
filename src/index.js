import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import store from './store';
import history from './history';

import App from './App';

const root = document.querySelector('#root');

render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    root
);
