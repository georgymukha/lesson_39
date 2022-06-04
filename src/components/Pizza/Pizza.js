import React from 'react';
import Ingredient from './Ingredient/Ingredient';

import './Pizza.css';

const Pizza = ({ingredients}) => {
  let ingList = [];

  for(let ingName in ingredients) {
    if (ingredients[ingName] !== 0) {
      ingList.push(<Ingredient key={ingName} type={ingName} />);
    }
  }

  if (!ingList.length) {
    ingList = <h1 className='title-empty'>Добавьте ингредиент</h1>
  }

  return (
    <div className="Pizza">
      {ingList}
    </div>
  );
};

export default Pizza;
