import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../features/cart/cartSlice';
import UserReducer from '../features/user/userStateSlice';
import CartState from '../features/cart/cartStateSlice';

const store = configureStore({
  reducer: {
    cart: CartReducer,
    cartState: CartState,
    user: UserReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
