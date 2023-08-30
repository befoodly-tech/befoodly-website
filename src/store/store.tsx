import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../features/cartSlice';
import UserReducer from '../features/userStateSlice';
import CartState from '../features/cartStateSlice';
import LoginReducer from '../features/loginSlice';

const store = configureStore({
  reducer: {
    cart: CartReducer,
    cartState: CartState,
    user: UserReducer,
    login: LoginReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
