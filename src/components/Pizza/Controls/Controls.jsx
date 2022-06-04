import React from 'react';
import ControlItem from './ControlItem/Controltem';

import './Controls.css';

const CONTROLS = {
  cheese: 'Сыр',
  olives: 'Оливки',
  sausage: 'Колбаски',
  mushrooms: 'Грибы'
}

const Controls = ({ ingredients, addIngredient, removeIngredient, price, purchasable }) => {
  return (
    <div className="pizza-controls">
      <h3 className="pizza-controls__title">Выберите ингредиент</h3>
      <div className="pizza-control__list">
        {Object.keys(CONTROLS).map((type) => {
          return (
            <ControlItem
              key={type}
              type={type}
              title={CONTROLS[type]}
              count={ingredients[type]}
              add={() => addIngredient(type)}
              remove={(event) => removeIngredient(event, type)}
            />
          );
        })}
      </div>
      <div className="pizza__price">Цена пиццы: <span>{price}</span>сом</div>
      <div className="pizza-order">
        <button className="pizza-order__btn" disabled={!purchasable}>Оформить заказ</button>
      </div>
    </div>
  );
};

export default Controls;
