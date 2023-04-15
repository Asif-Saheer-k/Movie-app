import * as actions from "../data/Data";
import axios from "axios";

// movie fetching function
export const fetchMovie = (page, search) => async (dispatch) => {
    // loader showing
    dispatch({ type: actions.FETCH_DATA });
    try {
        const { data } = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=dbc2365c&page=${page}`);
        // in case of movie invalid and not found and too many result  its shows
        // {
        // "Status":200
        // 	"Response": "False",
        // 	"Error": "Too many results."
        //   }

        if (data.Response == "True") {
            dispatch({ type: actions.FETCH_DATA_SUCCESS, payload: data });
        } else {
            dispatch({ type: actions.FETCH_DATA_FAILED, payload: data.Error });
        }
    } catch (error) {
        dispatch({ type: actions.FETCH_DATA_FAILED, payload: error.Error });
    }
};
