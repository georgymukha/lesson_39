import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Checkout() {

  const [ingredients, setIngredients] = useState({
    cheese: 1,
    olives: 1,
    sausage: 1,
    mushrooms: 1,
  });


  return (
    <div className="checkout">
      Checkout
    </div>
  );
}

export default Checkout
