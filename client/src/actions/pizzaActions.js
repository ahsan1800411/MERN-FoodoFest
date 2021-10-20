import axios from 'axios';
import {
  GET_PIZZAS_FAILURE,
  GET_PIZZAS_REQUEST,
  GET_PIZZAS_SUCCESS,
} from '../constants/pizzaconstants';

export const getAllPizzas = () => async (dispatch) => {
  dispatch({
    type: GET_PIZZAS_REQUEST,
  });

  try {
    const { data } = await axios.get('/api/pizzas/getallpizzas');
    dispatch({
      type: GET_PIZZAS_SUCCESS,
      payload: data.pizzas,
    });
  } catch (error) {
    dispatch({
      type: GET_PIZZAS_FAILURE,
      payload: error,
    });
  }
};
