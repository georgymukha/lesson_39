import React, { useState } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

import './Checkout.css';

function Checkout() {

  const [ingredients, setIngredients] = useState({
    cheese: 1,
    olives: 1,
    sausage: 1,
    mushrooms: 1,
  });


  return (
    <div className="checkout">
      <CheckoutSummary ingredients={ingredients}/>
    </div>
  );
}

export default Checkout
