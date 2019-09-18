import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import store, { history } from './store';

import App from './App';

console.log('store', store)
const root = document.querySelector('#root');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    root
);
