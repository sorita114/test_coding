import React from "react";
import {createStore, applyMiddleware} from 'redux';
import ReactDOM from "react-dom";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import modules from './modules';

const store = createStore(
    modules,
    composeWithDevTools(
        applyMiddleware(
            thunk
        )
    )
);

function run() {
    ReactDOM.render(<App store={store} />, document.getElementById('app'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.indexOf(document.readyState) !== -1 && document.body) {
    run();
} else {
    window.addEventListener('DOMContentLoaded', run, false);
}
