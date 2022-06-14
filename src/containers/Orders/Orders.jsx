import React from 'react'
import { useEffect, useState } from "react";

import axios from '../../api/axios-order';
import OrderItem from '../../components/Order/OrderItem/OrderItem';
import Loader from '../../components/UI/Loader/Loader';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('/orders?populate=ingredients')
      .then(res => {
        setOrders(res.data.data);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])

  if(loading) return <Loader/>;

  return (
    <ul className='orders__list'>
      {
        orders.map((order, index) => {
          return <OrderItem key={order.id} {...order} number={index + 1}/>
        }).reverse()
      }
    </ul>
  )
}

export default Orders
