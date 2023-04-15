import * as actions from "../data/Data";
import axios from "axios";

export const fetchMovie = (page,search) => async (dispatch) => {
	console.log(page,"d,c");
	if(!search){
		search="jak"
	}
    dispatch({ type: actions.FETCH_DATA });
    try {
        const { data } = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=dbc2365c&page=${page}`);

        if (data.Response=="True") {
            dispatch({ type: actions.FETCH_DATA_SUCCESS, payload: data });
        } else {
            dispatch({ type: actions.FETCH_DATA_FAILED, payload: data.Error });
        }
    } catch (error) {
        dispatch({ type: actions.FETCH_DATA_FAILED, payload: error.message });
        console.log(error.message);
    }
};

export const searchMovie = (query) => (dispatch, getState) => {
    const { MovieReducers } = getState();
    const searchResults = MovieReducers.searchResults.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
    );
    dispatch({ type: actions.SEARCH_DATA, payload: searchResults });
};
