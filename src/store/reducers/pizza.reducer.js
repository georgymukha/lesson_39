import {createSlice} from '@reduxjs/toolkit';

const PRICES = {
  cheese: 20,
  olives: 30,
  sausage: 45,
  mushrooms: 35,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    ingredients: {
      cheese: 0,
      olives: 0,
      sausage: 0,
      mushrooms: 0,
    },
    price: 100
  },
  reducers: {
    onAdd: (state, action) => {
      state.ingredients[action.payload]++;
      state.price += PRICES[action.payload];
    },
    onRemove: (state, action) => {
      state.ingredients[action.payload]--;
      state.price -= PRICES[action.payload];
    }
  }
});

export const { onAdd, onRemove } = pizzaSlice.actions;
