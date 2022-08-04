import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { pokemonsReducer } from './reducers/pokemonsReducer';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { logger } from './middlewares';
import thunk from 'redux-thunk';

const container = document.getElementById('root');
const root = createRoot(container);

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const composedEnhancers = composeAlt( applyMiddleware(thunk, logger) );

const store = createStore(
  pokemonsReducer,
  composedEnhancers
);

root.render(
  <Provider store={ store }>
    <App />
  </Provider>
)
