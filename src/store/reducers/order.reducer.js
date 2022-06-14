import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../../api/axios-order';

export const postOrder = createAsyncThunk(
  'order/post',
  async (data, {rejectWithValue} ) => {
    try {
      const res = await axios.post('/orders', data);

      if(!res) return new Error('Ошибка отправки');

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)


export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [postOrder.pending]: (state) => {
      state.loading = true;
    },
    [postOrder.fulfilled]: (state) => {
      state.loading = false;
    },
    [postOrder.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
