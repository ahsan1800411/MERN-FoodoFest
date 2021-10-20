import {
  GET_PIZZAS_FAILURE,
  GET_PIZZAS_REQUEST,
  GET_PIZZAS_SUCCESS,
} from '../constants/pizzaconstants';

export const getAllPizzasReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case GET_PIZZAS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case GET_PIZZAS_SUCCESS:
      return { ...state, loading: false, pizzas: action.payload };

    case GET_PIZZAS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
