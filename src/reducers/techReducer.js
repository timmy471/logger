import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR
} from "../actions/types";

const initialState = {
  techs: null,
  error: null
};

const techReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload]
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload)
      };
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default techReducer;
