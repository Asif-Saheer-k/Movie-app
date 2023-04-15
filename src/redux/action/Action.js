import * as actions from '../data/Data';
import axios from 'axios';

export const fetchMovie = (page) => async (dispatch) => {
	dispatch({ type: actions.FETCH_DATA });
	try {
		const {data} = await axios.get(`https://www.omdbapi.com/?s=Bats&apikey=dbc2365c&page=${page}`);
		dispatch({ type: actions.FETCH_DATA_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: actions.FETCH_DATA_FAILED, payload: error.message });
		console.log(error.message);	} 
}; 

export const searchMovie = (query) => (dispatch, getState) => {
	const { MovieReducers } = getState();
	const searchResults =  MovieReducers.searchResults.filter((post) => 
		post.title.toLowerCase().includes(query.toLowerCase())
	);
	dispatch({ type: actions.SEARCH_DATA, payload: searchResults });
};
