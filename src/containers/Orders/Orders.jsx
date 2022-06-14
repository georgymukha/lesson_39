import React from 'react'
import { useEffect, useState } from "react";

import axios from '../../api/axios-order';

function Orders() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    axios.get('/orders?populate=ingredients')
      .then(res => {
        setOrders(res.data.data);
      })
  }, [])

  return (
    <div>Orders</div>
  )
}

export default Orders
