import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

import './Checkout.css';

function Checkout() {

  const [ingredients, setIngredients] = useState({
    cheese: 0,
    olives: 0,
    sausage: 0,
    mushrooms: 0,
  });

  const [search] = useSearchParams();

  useEffect(() => {
    const ingredients = {};

    for(let [ingName, count] of search.entries()) { // [ ['cheese', 2], ['olives', 3] ]
      ingredients[ingName] = parseInt(count, 10);
    }
    setIngredients(ingredients);
  }, [])


  return (
    <div className="checkout">
      <CheckoutSummary ingredients={ingredients}/>
    </div>
  );
}

export default Checkout
