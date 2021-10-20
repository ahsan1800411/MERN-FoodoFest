export default function Pizza({ pizza }) {
  return (
    <div>
      <h1>{pizza.name}</h1>
      <img
        src={pizza.image}
        alt={pizza.name}
        className='img-fluid'
        style={{ width: '200px', height: '200px' }}
      />
      <div className='flex-container'>
        <div className='w-100'>
          <p>Varients</p>
          <select>
            {pizza.varients.map((varient) => (
              <option key={varient} value={varient}>
                {varient}
              </option>
            ))}
          </select>
        </div>
        <div className='w-100'>
          <p>Quantity</p>
          <select>
            {[...Array(10).keys()].map((x, i) => (
              <option value={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
