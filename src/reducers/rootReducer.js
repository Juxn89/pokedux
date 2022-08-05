import { combineReducers } from 'redux';
import { pokemonsReducer } from './pokemonsReducer';
import { uiPokemonsReducer } from './uiPokemonsReducer';

const rootReducer = combineReducers({
    data: pokemonsReducer,
    ui: uiPokemonsReducer
});

export default rootReducer;