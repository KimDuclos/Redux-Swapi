import /* we need our action types here*/ {
  GET_CHARS, 
  CHAR_SUCCESS,
  CHAR_FAILURE
} from "../actions";

const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  fetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    case GET_CHARS:
    // action types should be FETCHING, SUCCESS and FAILURE
      return { ...state, fetching: true };
    // your switch statement should handle all of these cases.
    case CHAR_SUCCESS: 
      return { ...state, characters: [...state.characters, ...action.payload]}
    case CHAR_FAILURE: 
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};
