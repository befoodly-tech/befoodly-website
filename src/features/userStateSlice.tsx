import { createSlice } from '@reduxjs/toolkit';
import { editCustomerDataApi, fetchCustomerDataApi } from '../actions/CustomerActions';
import { isApiStatusSuccess } from '../utils/GenericApiResponse';
import { GenericApiResponse } from '../types/ApiActions';

interface UserStateProps {
  isLoggedIn: boolean;
  customerData: GenericApiResponse;
  isLoading: boolean;
  isError: boolean;
}

const initialState: UserStateProps = {
  isLoggedIn: false,
  customerData: {},
  isLoading: false,
  isError: false
};

const userStateSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(editCustomerDataApi.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchCustomerDataApi.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(editCustomerDataApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.customerData = action.payload;
      state.isError = !isApiStatusSuccess(action.payload);
      state.isLoggedIn = isApiStatusSuccess(action.payload);
    });
    builder.addCase(fetchCustomerDataApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.customerData = action.payload;
      state.isError = !isApiStatusSuccess(action.payload);
      state.isLoggedIn = isApiStatusSuccess(action.payload);
    });
    builder.addCase(editCustomerDataApi.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(fetchCustomerDataApi.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export default userStateSlice.reducer;
