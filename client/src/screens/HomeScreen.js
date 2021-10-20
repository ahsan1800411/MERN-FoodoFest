import { useEffect } from 'react';
import Pizza from '../components/Pizza';
import pizzas from './../data';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../actions/pizzaActions';

export default function HomeScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div>
      <div className='row'>
        {pizzas.map((pizza) => (
          <div className='col-md-4 ' key={pizza.name}>
            <div>
              <Pizza pizza={pizza} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
