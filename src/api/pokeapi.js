const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

export const getAllPokemons = async () => {
    const response = await fetch(POKEAPI_BASE_URL);
    const {results} = await response.json();

    return results;
}