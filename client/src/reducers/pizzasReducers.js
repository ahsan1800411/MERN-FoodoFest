import {
  GET_PIZZAS_FAILURE,
  GET_PIZZAS_REQUEST,
  GET_PIZZAS_SUCCESS,
} from '../constants/pizzaconstants';

export const getAllPizzasReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PIZZAS_REQUEST:
      return {
        ...state,
      };
    case GET_PIZZAS_SUCCESS:
      return { ...state, pizzas: action.payload };

    case GET_PIZZAS_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
