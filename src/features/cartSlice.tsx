import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  addItemToCart,
  confirmOrderForDelivery,
  fetchActiveCartData,
  removeItemFromCart
} from '../actions/CartActions';
import { GenericApiResponse } from '../types/ApiActions';
import { isApiStatusSuccess } from '../utils/GenericApiResponse';
import { CartItem } from '../types/CommonType';

interface CartSliceProps {
  isLoading: boolean;
  cartData: GenericApiResponse;
  orderConfirmData: GenericApiResponse;
  totalCost: number;
  isError: boolean;
}

const initialState: CartSliceProps = {
  isLoading: false,
  cartData: {},
  orderConfirmData: {},
  totalCost: 0,
  isError: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      if (!state.cartData?.data && !state.cartData?.data?.productList) {
        state.cartData.data = {};
        state.cartData.data['productList'] = [];
      }
      const cartItems = state.cartData?.data?.productList;
      if (cartItems?.find((x: CartItem) => x.productId == action.payload.productId)) {
        const ind = cartItems?.findIndex((x: CartItem) => x.productId == action.payload.productId);
        cartItems[ind].orderCount++;
      } else {
        cartItems.push({
          productId: action.payload.productId,
          productName: action.payload.productName,
          orderCount: 1,
          cost: action.payload.cost
        });
      }
      state.totalCost += action.payload.cost;
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      const cartItems = state.cartData?.data?.productList;
      if (cartItems?.find((x: CartItem) => x.productId == action.payload.productId)) {
        const ind = cartItems?.findIndex((x: CartItem) => x.productId == action.payload.productId);
        if (cartItems[ind].orderCount > 1) {
          cartItems[ind].orderCount--;
        } else {
          cartItems.splice(ind, 1);
        }
      }
      state.totalCost -= action.payload.cost;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchActiveCartData.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(addItemToCart.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(removeItemFromCart.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(confirmOrderForDelivery.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchActiveCartData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartData = action.payload;
      state.isError = !isApiStatusSuccess(action.payload);

      if (action.payload?.data) {
        state.totalCost = action.payload?.data?.totalCost;
      }
    });
    builder.addCase(addItemToCart.fulfilled, state => {
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(removeItemFromCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = !isApiStatusSuccess(action.payload);
    });
    builder.addCase(confirmOrderForDelivery.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orderConfirmData = action.payload;
      state.isError = !isApiStatusSuccess(action.payload);

      if (action.payload?.data) {
        state.cartData = {};
      }
    });
    builder.addCase(fetchActiveCartData.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(addItemToCart.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(removeItemFromCart.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(confirmOrderForDelivery.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
