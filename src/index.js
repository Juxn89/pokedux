import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import App from './App';

import { logger } from './middlewares';
import rootReducer from './reducers/rootReducer';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger) );

const store = createStore(
  rootReducer,
  composedEnhancers
);

root.render(
  <Provider store={ store }>
    <App />
  </Provider>
)
