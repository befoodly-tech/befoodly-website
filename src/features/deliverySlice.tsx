import { createSlice } from '@reduxjs/toolkit';
import { GenericApiResponse } from '../types/ApiActions';
import { fetchPendingDeliveryData } from '../actions/DeliveryActions';
import { isApiStatusSuccess } from '../utils/GenericApiResponse';

interface DeliveryStateProps {
  deliveryDetails: GenericApiResponse;
  isLoading: boolean;
  isError: boolean;
}

const initialState: DeliveryStateProps = {
  deliveryDetails: {},
  isLoading: false,
  isError: false
};

const deliverySlice = createSlice({
  name: 'delivery',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPendingDeliveryData.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchPendingDeliveryData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.deliveryDetails = action.payload;
      state.isError = !isApiStatusSuccess(action.payload);
    });
    builder.addCase(fetchPendingDeliveryData.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export default deliverySlice.reducer;
