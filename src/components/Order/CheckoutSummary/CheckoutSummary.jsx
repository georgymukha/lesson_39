import React from 'react'
import Pizza from '../../Pizza/Pizza'
import Button from '../../UI/Button/Button';

function CheckoutSummary({ingredients}) {
  return (
    <>
      <Pizza ingredients={ingredients} />
      <div className="checkout__wrap">
        <h1 className="checkout__title">Подтвердите свой заказ</h1>
        <div className="checkout__actions">
          <Button type="btn-danger">Отмена</Button>
          <Button type="btn-success">Продолжить</Button>
        </div>
      </div>
    </>
  );
}

export default CheckoutSummary
