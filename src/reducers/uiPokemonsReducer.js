import { fromJS } from "immutable";
import { SET_LOADING } from "../actions/types";

const INITIAL_STATE = fromJS({
    isLoading: true
})

export const uiPokemonsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_LOADING:
            return state.setIn(['isLoading'], fromJS(action.payload));
        default:
            return state;
    }
}