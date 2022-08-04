import axios from "axios";

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

export const getAllPokemons = async () => {
    const { data } = await axios.get(POKEAPI_BASE_URL);
    return data.results;
}