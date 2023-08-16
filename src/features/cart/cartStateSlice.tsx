import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false
};

export const cartStateSlice = createSlice({
  name: 'cartState',
  initialState: initialState,
  reducers: {
    openCart: state => {
      state.isOpen = true;
    },
    closeCart: state => {
      state.isOpen = false;
    }
  }
});

export const { openCart, closeCart } = cartStateSlice.actions;

export default cartStateSlice.reducer;
