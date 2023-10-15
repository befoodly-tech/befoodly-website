import { createSlice } from '@reduxjs/toolkit';
import { GenericApiResponse } from '../types/ApiActions';
import { fetchAvailableDeliverySlots, fetchPendingDeliveryData } from '../actions/DeliveryActions';
import { isApiStatusSuccess } from '../utils/GenericApiResponse';
import { HourMinuteTimeType } from '../types/CommonType';
import { deliverySlotToStringConversion, formatDateTimeToString } from '../utils/CommonUtils';

interface DeliveryStateProps {
  deliveryDetails: GenericApiResponse;
  availableDeliverySlots: GenericApiResponse;
  isLoading: boolean;
  isError: boolean;
}

const initialState: DeliveryStateProps = {
  deliveryDetails: {},
  availableDeliverySlots: {},
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
    builder.addCase(fetchAvailableDeliverySlots.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchPendingDeliveryData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.deliveryDetails = action.payload;
      state.isError = !isApiStatusSuccess(action.payload);
    });
    builder.addCase(fetchAvailableDeliverySlots.fulfilled, (state, action) => {
      state.isLoading = false;
      state.availableDeliverySlots = action.payload;
      state.isError = !isApiStatusSuccess(action.payload);

      if (action.payload.data?.length > 0) {
        state.availableDeliverySlots.data = action.payload.data?.map((slot: HourMinuteTimeType) => {
          return {
            label: deliverySlotToStringConversion(slot),
            value: formatDateTimeToString(slot)
          };
        });
      }
    });
    builder.addCase(fetchPendingDeliveryData.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(fetchAvailableDeliverySlots.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export default deliverySlice.reducer;
