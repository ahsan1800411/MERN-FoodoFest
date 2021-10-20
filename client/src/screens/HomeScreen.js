import { useEffect } from 'react';
import Pizza from '../components/Pizza';

import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../actions/pizzaActions';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const { loading, pizzas, error } = useSelector((state) => state.getAllPizzas);
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div>
      <div className='row justify-content-center'>
        {loading ? (
          <h1>Loading....</h1>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          pizzas.map((pizza) => (
            <div className='col-md-3 m-3 ' key={pizza.name}>
              <div>
                <Pizza pizza={pizza} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
