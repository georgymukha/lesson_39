import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';

import axios from '../../api/axios-order';

import './ContactData.css';
import Loader from '../../components/UI/Loader/Loader';

function ContactData() {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  const {ingredients} = useOutletContext();

  const [loading, setLoading] = useState(false);

  const changeHandler = (event) => {
    let prop = event.target.name; // email
    let value = event.target.value; //
    setCustomer(customer => {
      return {
        ...customer,
        [prop]: value
      }
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);

    let order = {
      ingredients,
      customer
    };

    axios
      .post("/orders.json", order)
      .then(() => {
        alert('Данные успешно отправлены')
      })
      .finally(() => {
        setLoading(false);
      })

  };

  if(loading) return <Loader/>;

  return (
    <div className="contact-data">
      <h3 className="contact-data__title">Введите свои данные</h3>
      <form className="contact-data__form" onSubmit={submitHandler}>
        <div className="contact-data__group">
          <input
            type="text"
            name="name"
            className="contact-data__input"
            placeholder="Введите свое имя"
            onChange={changeHandler}
          />
        </div>

        <div className="contact-data__group">
          <input
            type="text"
            name="email"
            className="contact-data__input"
            placeholder="Введите свой email"
            onChange={changeHandler}
          />
        </div>

        <div className="contact-data__group">
          <input
            type="text"
            name="address"
            className="contact-data__input"
            placeholder="Введите свой адрес"
            onChange={changeHandler}
          />
        </div>

        <div className="contact-data__group">
          <input
            type="text"
            name="phone"
            className="contact-data__input"
            placeholder="Введите свой телефон"
            onChange={changeHandler}
          />
        </div>

        <div className="contact-data__group">
          <Button type="btn-danger">Заказать</Button>
        </div>
      </form>
    </div>
  );
}

export default ContactData
