import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiHelper, { API_URLS, getApiUrl } from '../utils/ApiHelper';
import { MethodType } from '../types/ApiHelperFile';
import { OtpRequest } from '../types/ApiActions';

export const healthCheckApi = createAsyncThunk('fetch/healthCheck', (sessionToken: string) => {
  const url = getApiUrl(API_URLS.SESSION_CHECK, sessionToken);

  return ApiHelper(url, MethodType.GET);
});

export const signUpUserApi = createAsyncThunk('signUp/user', (phoneNumber: string) => {
  const url = getApiUrl(API_URLS.SIGN_UP_USER, phoneNumber);

  return ApiHelper(url, MethodType.POST);
});

export const logInUserApi = createAsyncThunk('logIn/user', (email: string) => {
  const url = getApiUrl(API_URLS.LOGIN_USER, undefined, [{ key: 'email', value: email }]);

  return ApiHelper(url, MethodType.POST);
});

export const verifyOtpApi = createAsyncThunk('verify/user', (data: OtpRequest) => {
  const url = getApiUrl(API_URLS.VERIFY_OTP, data.phoneNumber, [{ key: 'otp', value: data.otp }]);

  return ApiHelper(url, MethodType.PUT);
});
