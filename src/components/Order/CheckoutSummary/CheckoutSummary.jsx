import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Pizza from '../../Pizza/Pizza'
import Button from '../../UI/Button/Button';

function CheckoutSummary({ingredients}) {
  const navigate = useNavigate();


  return (
    <>
      <Pizza ingredients={ingredients} />
      <div className="checkout__wrap">
        <h1 className="checkout__title">Подтвердите свой заказ</h1>
        <div className="checkout__actions">
          <Button type="btn-danger" clicked={() => navigate('/')}>Отмена</Button>
          <Button type="btn-success" clicked={() => navigate('/checkout/contact-data')}>Продолжить</Button>
        </div>

        <div>
          <Outlet context={{ingredients}}/>
        </div>
      </div>
    </>
  );
}

export default CheckoutSummary
