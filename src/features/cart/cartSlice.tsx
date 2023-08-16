import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Cart } from '../../components/Cart/Cart';

const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ id: number; dishName: string; price: number }>) => {
      if (state.find(x => x.id == action.payload.id)) {
        const ind = state.findIndex(x => x.id == action.payload.id);
        state[ind].quantity++;
      } else {
        state.push({
          id: action.payload.id,
          dishName: action.payload.dishName,
          quantity: 1,
          price: action.payload.price
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      if (state.find(x => x.id == action.payload)) {
        const ind = state.findIndex(x => x.id == action.payload);
        if (state[ind].quantity > 1) {
          state[ind].quantity--;
        } else {
          state.splice(ind, 1);
        }
      }
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
