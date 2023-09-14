import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiHelper, { API_URLS, getApiUrl } from '../utils/ApiHelper';
import { MethodType } from '../types/ApiHelperFile';

interface CustomerDataEditProps {
  customerId: string;
  body: any;
  title?: string;
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

export const fetchAllAddressesApi = createAsyncThunk(
  'fetch/allAddressData',
  (customerId: string) => {
    const url = getApiUrl(API_URLS.FETCH_ALL_ADDRESSES, customerId);

    return ApiHelper(url, MethodType.GET);
  }
);

export const addAddressApi = createAsyncThunk('add/addressData', (data: CustomerDataEditProps) => {
  const url = getApiUrl(API_URLS.ADD_ADDRESS, data.customerId);

  return ApiHelper(url, MethodType.POST, JSON.stringify(data.body));
});

export const editAddressApi = createAsyncThunk(
  'edit/addressData',
  (data: CustomerDataEditProps) => {
    const url = getApiUrl(API_URLS.EDIT_ADDRESS, data.customerId, [
      { key: 'title', value: data?.title }
    ]);

    return ApiHelper(url, MethodType.PUT, JSON.stringify(data.body));
  }
);
