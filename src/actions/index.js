// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const GET_CHARS = "GET_CHARS";
export const CHAR_SUCCESS = "CHAR_SUCESS";
export const CHAR_FAILURE = "CHAR_FAILER";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getChars = () => dispatch => {
    dispatch({ type: GET_CHARS });
    axios
        .get("https://swapi.co/api/people/")
        .then(({ data }) => {
            dispatch({
                type: CHAR_SUCCESS,
                payload: data.results
            });
        })
        .catch(err => {
            dispatch({
                type: CHAR_FAILURE, 
                payload: err
            });
        });
};
