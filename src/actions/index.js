import { getPokemonDetail } from "../api/pokeapi";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload
})

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload
})

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload
});

export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {    
    const dataDetails = await Promise.all(
        pokemons.map(pokemon => getPokemonDetail(pokemon))
    );

    dispatch(setPokemons(dataDetails));
}