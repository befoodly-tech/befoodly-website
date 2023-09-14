import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiHelper, { API_URLS, getApiUrl } from '../utils/ApiHelper';
import { MethodType } from '../types/ApiHelperFile';

interface CartRequestProps {
  customerId: string;
  body: any;
}

export const addItemToCart = createAsyncThunk('add/itemToCart', (data: CartRequestProps) => {
  const apiUrl = getApiUrl(API_URLS.ADD_TO_CART, data?.customerId);

  return ApiHelper(apiUrl, MethodType.POST, JSON.stringify(data.body));
});

export const fetchActiveCartData = createAsyncThunk(
  'fetch/activeCartData',
  (customerId: string) => {
    const apiUrl = getApiUrl(API_URLS.FETCH_CART_DATA, customerId);

    return ApiHelper(apiUrl, MethodType.GET);
  }
);

export const removeItemFromCart = createAsyncThunk(
  'remove/itemFromCart',
  (data: CartRequestProps) => {
    const apiUrl = getApiUrl(API_URLS.EDIT_CART, data?.customerId, [{ key: 'count', value: 1 }]);

    return ApiHelper(apiUrl, MethodType.PUT, JSON.stringify(data.body));
  }
);

export const confirmOrderForDelivery = createAsyncThunk(
  'confirm/orderForDelivery',
  (data: CartRequestProps) => {
    const apiUrl = getApiUrl(API_URLS.PLACE_ORDER, data?.customerId);

    return ApiHelper(apiUrl, MethodType.POST, JSON.stringify(data.body));
  }
);
