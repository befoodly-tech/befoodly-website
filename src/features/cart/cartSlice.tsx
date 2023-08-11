import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: number[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state = state.filter(x => x != action.payload);
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
