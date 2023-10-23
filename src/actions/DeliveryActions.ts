import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiHelper, { API_URLS, getApiUrl } from '../utils/ApiHelper';
import { MethodType } from '../types/ApiHelperFile';

export const fetchPendingDeliveryData = createAsyncThunk(
  'fetch/pendingDeliveryData',
  (customerId: string) => {
    const apiUrl = getApiUrl(API_URLS.FETCH_PENDING_ORDERS, customerId);

    return ApiHelper(apiUrl, MethodType.GET);
  }
);

export const fetchAvailableDeliverySlots = createAsyncThunk(
  'fetch/availableDeliveryTimeSlot',
  () => {
    const apiUrl = getApiUrl(API_URLS.FETCH_AVAILABLE_TIME_SLOTS);

    return ApiHelper(apiUrl, MethodType.GET);
  }
);
