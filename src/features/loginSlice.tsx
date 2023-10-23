import { createSlice } from '@reduxjs/toolkit';
import { healthCheckApi, logInUserApi, signUpUserApi, verifyOtpApi } from '../actions/LoginActions';
import { GenericApiResponse } from '../types/ApiActions';
import { isApiStatusSuccess } from '../utils/GenericApiResponse';
import { removeCookie, setCookie } from '../utils/CookieHelper';

interface LoginSliceProp {
  isLoading: boolean;
  sessionData: GenericApiResponse;
  loginData: GenericApiResponse;
  isError: boolean;
  isSessionExpired: boolean;
}

const initialState: LoginSliceProp = {
  isLoading: false,
  sessionData: {},
  loginData: {},
  isError: false,
  isSessionExpired: false
};

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    removeLoginErrorData: state => {
      if (state.loginData?.errorMessage) {
        state.loginData = {};
      }
    },
    removeSessionErrorData: state => {
      if (state.sessionData?.errorMessage) {
        state.sessionData = {};
      }
    }
  },
  extraReducers(builder) {
    builder.addCase(signUpUserApi.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(logInUserApi.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(verifyOtpApi.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(healthCheckApi.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(signUpUserApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.sessionData = action.payload;
      state.isError = !isApiStatusSuccess(action.payload);
    });
    builder.addCase(logInUserApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.sessionData = action.payload;
      state.isError = !isApiStatusSuccess(action.payload);
    });
    builder.addCase(verifyOtpApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.loginData = action.payload;
      state.isError = !isApiStatusSuccess(action.payload);

      if (action.payload?.data) {
        setCookie('session', action.payload?.data?.customerData?.sessionToken, 30);
        setCookie('phone', action.payload?.data?.customerData?.phoneNumber, 30);
        setCookie('customerId', action.payload?.data?.customerData?.referenceId, 30);
        state.isSessionExpired = false;
      }
    });
    builder.addCase(healthCheckApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = !isApiStatusSuccess(action.payload);

      if (action.payload?.data) {
        state.isSessionExpired = action.payload?.data;
        removeCookie('session');
        removeCookie('phone');
        removeCookie('customerId');
        location.reload();
      }
    });
    builder.addCase(signUpUserApi.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(logInUserApi.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(verifyOtpApi.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(healthCheckApi.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export const { removeLoginErrorData, removeSessionErrorData } = loginSlice.actions;

export default loginSlice.reducer;
