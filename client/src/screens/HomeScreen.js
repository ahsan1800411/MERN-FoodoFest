import Pizza from '../components/Pizza';
import pizzas from './../data';

export default function HomeScreen() {
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
