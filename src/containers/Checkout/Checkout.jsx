import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Checkout() {

  const [ingredients, setIngredients] = useState({
    cheese: 1,
    olives: 1,
    sausage: 1,
    mushrooms: 1,
  });

  const [value, setValue] = useState('');

  const changeHandler = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className="checkout">
      <input type="text" value={value} onChange={changeHandler} />
      <Link to="/">Home</Link>
    </div>
  );
}

export default Checkout
