import React from 'react'

import './OrderItem.css';

function OrderItem({ name, email, address, phone, ingredients, number }) {
  return (
    <li className="orders__item">
      <h3 className="orders__title">
        Заказ <strong>#{number}</strong>
      </h3>
      <div className="orders__body">
        <div className="customer">
          <h4 className="customer__title">Инфо о заказчике:</h4>
          <ul className="customer__list">
            <li className="customer__item">
              Имя: <span>{name}</span>
            </li>
            <li className="customer__item">
              Email: <span>{email}</span>
            </li>
            <li className="customer__item">
              Адрес: <span>{address}</span>
            </li>
            <li className="customer__item">
              Телефон: <span>{phone}</span>
            </li>
          </ul>
        </div>
        <div className="ingredients">
          <h4 className="ingredients__title">Ингредиенты</h4>
          <ul className="ingredients__list">
            {
              ingredients.map(ing => {
                return (
                  <li key={ing.id} className="ingredients__item">
                    {ing.name}: <span>{ing.count}</span>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </li>
  );
}

export default OrderItem
