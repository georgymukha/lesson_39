import React from 'react';

import './Loader.css';

function Loader() {
  let pizzaItem = Array.from(Array(12), (_, index) => <div key={index}/>);
  return (
    <div className='pizza-loader-wrap'>
      <div className="pizza-loader">
        {pizzaItem}
      </div>
    </div>
  )
}

export default Loader
