import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPokemons, getPokemonDetail } from '../api/pokeapi';
import { setLoading } from './uiSlice';

const INITIAL_STATE = {
    pokemons: [],
}

export const fetchPokemonWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDatails',
    async (_, { dispatch }) => {
        const data = await getAllPokemons();

        const dataDetails = await Promise.all(
            data.map(pokemon => getPokemonDetail(pokemon))
        );

        dispatch(setPokemons(dataDetails));
        dispatch(setLoading(false));
    }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState: INITIAL_STATE,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex =  state.pokemons.findIndex(p => p.get('id') === action.payload.id);

            if(currentPokemonIndex >= 0) {
                const isFavorite =  state.pokemons[currentPokemonIndex].favorite;
                state.pokemons[currentPokemonIndex].favorite = !isFavorite;
            }
        }
    }
});

export const { setFavorite, setPokemons } = dataSlice.actions;
export default dataSlice.reducer;