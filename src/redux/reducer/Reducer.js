import { combineReducers } from "redux";
import { FETCH_DATA, FETCH_DATA_FAILED, FETCH_DATA_SUCCESS, SEARCH_DATA } from "../data/Data";

const initialState = {
    movie: [],
    searchResults: [],
    page: 1,
};

export const MovieReducers = (state = initialState, action) => {
    if (action.type === FETCH_DATA) {
        return {
            ...state,
            loading: true,
        };
    } else if (action.type === FETCH_DATA_SUCCESS) {
        return {
            ...state,
            loading: false,
            movie: action.payload.data,
            searchResults: action.payload.data,
        };
    } else if (action.type === FETCH_DATA_FAILED) {
        return {
            ...state,
            loading: true,
        };
    } else if (action.type === SEARCH_DATA) {
        return {
            ...state,
            movie: action.payload,
            page: 1,
        };
    } else {
        return state;
    }
};

export const rootReducers = combineReducers({
    MovieReducers,
});
