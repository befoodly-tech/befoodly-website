import { createSlice } from '@reduxjs/toolkit';
import { GenericApiResponse } from '../types/ApiActions';
import { fetchPopularCookDataApi } from '../actions/ChefActions';
import { isApiStatusSuccess } from '../utils/GenericApiResponse';

interface UserStateProps {
  chefData: GenericApiResponse;
  isLoading: boolean;
  isError: boolean;
}

const initialState: UserStateProps = {
  chefData: {},
  isLoading: false,
  isError: false
};

const chefSlice = createSlice({
  name: 'chef',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPopularCookDataApi.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchPopularCookDataApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.chefData = action.payload;
      state.isError = !isApiStatusSuccess(action.payload);
    });
    builder.addCase(fetchPopularCookDataApi.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export default chefSlice.reducer;
