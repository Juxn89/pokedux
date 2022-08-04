import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { pokemonsReducer } from './reducers/pokemonsReducer';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux'

const container = document.getElementById('root');
const root = createRoot(container);

const store = createStore(
  pokemonsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

root.render(
  <Provider store={ store }>
    <App />
  </Provider>
)
