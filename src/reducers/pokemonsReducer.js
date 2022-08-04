import { SET_POKEMONS } from "../actions/types";

const INITIAL_STATE = {
    pokemons: []
}

export const pokemonsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_POKEMONS:            
            return {
                ...state,
                pokemons: action.payload
            }
        default:
            return state;
    }
}