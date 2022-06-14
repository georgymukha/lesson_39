import { configureStore } from '@reduxjs/toolkit';
import { pizzaSlice } from './reducers/pizza.reducer';

export const store = configureStore({
  reducer: {
    pizza: pizzaSlice.reducer
  }
})
