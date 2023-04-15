import * as actions from "../data/Data";
import axios from "axios";

export const fetchMovie = (page,search) => async (dispatch) => {

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
        
    }
};
