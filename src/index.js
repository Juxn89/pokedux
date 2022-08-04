import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { pokemonsReducer } from './reducers/pokemonsReducer';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { featuring, logger } from './middlewares';

const container = document.getElementById('root');
const root = createRoot(container);

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, featuring)
)

const store = createStore(
  pokemonsReducer,
  composedEnhancers
);

root.render(
  <Provider store={ store }>
    <App />
  </Provider>
)
