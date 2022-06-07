import React from 'react';
import Button from '../UI/Button/Button';

import './OrderInfo.css';

function OrderInfo({
  ingredients,
  price,
  purchaseCancelled,
  purchaseContinued,
}) {
  const ingredientSummary = Object.keys(ingredients).map((ingName) => {
    return (
      <li key={ingName} className="order-info__item">
        <span>{ingName}:</span>
        <span style={{ color: "red" }}>{ingredients[ingName]}</span>
      </li>
    );
  });
  return (
    <div className="order-info">
      <h3 className="order-info__title">Ваш заказ</h3>
      <p className="order-info__desc">
        Ваша пицца состоит из следующих ингредиентов
      </p>
      <ul className="order-info__list">{ingredientSummary}</ul>
      <div className="order-info__price">
        Цена заказа: <strong>{price} сом</strong>
      </div>
      <div className="order-info__actions">
        <Button type="btn-danger" clicked={purchaseCancelled}>
          Отмена
        </Button>
        <Button type="btn-success" clicked={purchaseContinued}>
          Продолжить
        </Button>
      </div>
    </div>
  );
}

export default OrderInfo
