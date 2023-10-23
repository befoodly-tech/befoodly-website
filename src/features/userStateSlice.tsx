import { createSlice } from '@reduxjs/toolkit';
import {
  addAddressApi,
  editAddressApi,
  editCustomerDataApi,
  fetchAllAddressesApi,
  fetchCustomerDataApi
} from '../actions/CustomerActions';
import { isApiStatusSuccess } from '../utils/GenericApiResponse';
import { GenericApiResponse } from '../types/ApiActions';
import { AddressData } from '../types/CommonType';

interface UserStateProps {
  customerData: GenericApiResponse;
  addressData: GenericApiResponse;
  isLoading: boolean;
  isError: boolean;
}

const initialState: UserStateProps = {
  customerData: {},
  addressData: {},
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
    builder.addCase(fetchAllAddressesApi.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(addAddressApi.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(editAddressApi.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(editCustomerDataApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = !isApiStatusSuccess(action.payload);

      if (action.payload?.errorMessage) {
        state.customerData.errorMessage = action.payload?.errorMessage;
      } else {
        state.customerData = action.payload;
      }
      location.reload();
    });
    builder.addCase(fetchCustomerDataApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.customerData = action.payload;
      state.isError = !isApiStatusSuccess(action.payload);
    });
    builder.addCase(fetchAllAddressesApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.addressData = action.payload;
      state.isError = !isApiStatusSuccess(action.payload);
    });
    builder.addCase(addAddressApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = !isApiStatusSuccess(action.payload);

      if (action.payload?.data) {
        if (!state.addressData?.data) {
          state.addressData['data'] = [];
        }
        state.addressData?.data?.push(action.payload?.data);
      }
    });
    builder.addCase(editAddressApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = !isApiStatusSuccess(action.payload);

      if (
        action.payload?.data &&
        state.addressData?.data?.find((data: AddressData) => data?.id == action.payload.data?.id)
      ) {
        const idx = state.addressData?.data?.findIndex(
          (data: AddressData) => data?.id == action.payload.data?.id
        );
        state.addressData.data[idx] = action.payload?.data;
      }
    });
    builder.addCase(editCustomerDataApi.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(fetchCustomerDataApi.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(fetchAllAddressesApi.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(addAddressApi.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(editAddressApi.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export default userStateSlice.reducer;
