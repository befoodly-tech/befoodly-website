import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiHelper, { API_URLS, getApiUrl } from '../utils/ApiHelper';
import { MethodType } from '../types/ApiHelperFile';

export const fetchPopularCookDataApi = createAsyncThunk('fetch/popularCookData', () => {
  const url = getApiUrl(API_URLS.FETCH_COOK_DATA, undefined, [{ key: 'orderCounts', value: 0 }]);

  return ApiHelper(url, MethodType.GET);
});
