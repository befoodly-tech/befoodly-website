import { createSlice } from '@reduxjs/toolkit';
import { logInUserApi, signUpUserApi, verifyOtpApi } from '../actions/LoginActions';
import { GenericApiResponse, LoginResponse } from '../types/ApiActions';
import { isApiStatusSuccess } from '../utils/GenericApiResponse';

interface LoginSliceProp {
  isLoading: boolean;
  sessionData: GenericApiResponse;
  loginData: GenericApiResponse;
  isError: boolean;
}

const initialState: LoginSliceProp = {
  isLoading: false,
  sessionData: {},
  loginData: {},
  isError: false
};

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {},
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
  }
});

export default loginSlice.reducer;
