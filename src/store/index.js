import { configureStore } from '@reduxjs/toolkit';
import { orderSlice } from './reducers/order.reducer';
import { pizzaSlice } from './reducers/pizza.reducer';

export const store = configureStore({
  reducer: {
    pizza: pizzaSlice.reducer,
    order: orderSlice.reducer
  }
})
