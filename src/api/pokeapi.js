import axios from "axios";

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/';

export const getAllPokemons = async () => {
    const { data } = await axios.get(`${POKEAPI_BASE_URL}pokemon?limit=151`);
    return data.results;
}

export const getPokemonDetail = async ( { url} ) => {
    const { data } = await axios.get( url );
    return data;
}