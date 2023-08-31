import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiHelper, { API_URLS, getApiUrl } from '../utils/ApiHelper';
import { MethodType } from '../types/ApiHelperFile';

interface CustomerDataEditProps {
  customerId: string;
  body: any;
}

export const fetchCustomerDataApi = createAsyncThunk('fetch/customerData', (customerId: string) => {
  const url = getApiUrl(API_URLS.FETCH_CUSTOMER_DATA, customerId);

  return ApiHelper(url, MethodType.GET);
});

export const editCustomerDataApi = createAsyncThunk(
  'edit/customerData',
  (data: CustomerDataEditProps) => {
    const url = getApiUrl(API_URLS.EDIT_CUSTOMER, data.customerId);

    return ApiHelper(url, MethodType.PUT, JSON.stringify(data.body));
  }
);
