import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    isLoading: true
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState: INITIAL_STATE,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        } 
    } 
});

export const { setLoading } = uiSlice.actions;
export default uiSlice.reducer;