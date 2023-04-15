import { combineReducers } from "redux";
import { FETCH_DATA, FETCH_DATA_FAILED, FETCH_DATA_SUCCESS, SEARCH_DATA } from "../data/Data";

const initialState = {
    movie: [],
    searchResults: [],
    totalResults:0,
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
            movie: action.payload.Search,
            searchResults: action.payload.Search,
            totalResults:action.payload.totalResults
        };
    } else if (action.type === FETCH_DATA_FAILED) {
        return {
            ...state,
            loading: true,
        };
    } else if (action.type === SEARCH_DATA) {
        return {
            ...state,
            loading:false,
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
