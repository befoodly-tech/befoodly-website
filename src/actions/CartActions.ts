import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiHelper, { API_URLS, getApiUrl } from '../utils/ApiHelper';
import { MethodType } from '../types/ApiHelperFile';

interface CartRequestProps {
  customerId: string;
  body: any;
}

export const addItemToCart = createAsyncThunk('add/itemToCart', (data: CartRequestProps) => {
  const apiUrl = getApiUrl(API_URLS.ADD_ADDRESS, data?.customerId);

  return ApiHelper(apiUrl, MethodType.POST, JSON.stringify(data.body));
});
