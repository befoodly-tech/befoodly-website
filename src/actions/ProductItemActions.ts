import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiHelper, { API_URLS, getApiUrl } from '../utils/ApiHelper';
import { MethodType } from '../types/ApiHelperFile';

export const fetchActiveMenuDataApi = createAsyncThunk('fetch/activeMenuData', () => {
  const url = getApiUrl(API_URLS.FETCH_ACTIVE_ITEMS);

  return ApiHelper(url, MethodType.GET);
});

export const fetchTrendingProductsApi = createAsyncThunk('fetch/trendingItems', () => {
  const url = getApiUrl(API_URLS.FETCH_POPULAR_PRODUCTS);

  return ApiHelper(url, MethodType.GET);
});
