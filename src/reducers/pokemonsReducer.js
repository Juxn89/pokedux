import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

const INITIAL_STATE = {
    pokemons: [],
    isLoading: true
}

export const pokemonsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_POKEMONS:            
            return {
                ...state,
                pokemons: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case SET_FAVORITE:
            const newPokemonList = [...state.pokemons];
            const currentPokemonIndex =  newPokemonList.findIndex(p => p.id === action.payload.id);

            if(currentPokemonIndex < 0) return { ...state }

            newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;

            return {
                ...state,
                pokemons: [newPokemonList]
            }
        default:
            return state;
    }
}