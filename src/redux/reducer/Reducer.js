import { combineReducers } from "redux";
import { FETCH_DATA, FETCH_DATA_FAILED, FETCH_DATA_SUCCESS } from "../data/Data";

const initialState = {
    movie: [],
    totalResults: 0,
    page: 1,
    error: null,
};

export const MovieReducers = (state = initialState, action) => {
    if (action.type === FETCH_DATA) {
        // loader working
        return {
            ...state,
            loading: true,
        };
    } else if (action.type === FETCH_DATA_SUCCESS) {
        // data fetching success
        return {
            ...state,
            loading: false,
            movie: action.payload.Search,
            totalResults: action.payload.totalResults,
            error: null,
        };
    } else if (action.type === FETCH_DATA_FAILED) {
        // api error
        return {
            ...state,
            loading: true,
            error: action.payload,
        };
    } else {
        return state;
    }
};

export const rootReducers = combineReducers({
    MovieReducers,
});
