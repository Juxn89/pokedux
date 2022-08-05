import { fromJS } from "immutable";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

const INITIAL_STATE = fromJS({
    pokemons: [],
    isLoading: true
})

export const pokemonsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return state.setIn(['pokemons'], fromJS(action.payload))
        case SET_LOADING:
            return state.setIn(['isLoading'], fromJS(action.payload))
        case SET_FAVORITE:
            const currentPokemonIndex =  state.get('pokemons').findIndex(p => p.get('id') === action.payload.id);

            if(currentPokemonIndex < 0) return { ...state }

            const isFavorite =  state.get(['pokemons', currentPokemonIndex, 'favorite']);

            return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite);
        default:
            return state;
    }
}