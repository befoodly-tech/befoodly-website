import { createSlice } from '@reduxjs/toolkit';
import { GenericApiResponse } from '../types/ApiActions';
import { isApiStatusSuccess } from '../utils/GenericApiResponse';
import { fetchActiveMenuDataApi, fetchTrendingProductsApi } from '../actions/ProductItemActions';

interface ProductStateProps {
  productData: GenericApiResponse;
  trendingProductData: GenericApiResponse;
  isLoading: boolean;
  isError: boolean;
}

const initialState: ProductStateProps = {
  productData: {},
  trendingProductData: {},
  isLoading: false,
  isError: false
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchActiveMenuDataApi.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchTrendingProductsApi.pending, state => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchActiveMenuDataApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productData = action.payload;
      state.isError = !isApiStatusSuccess(action.payload);
    });
    builder.addCase(fetchTrendingProductsApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.trendingProductData = action.payload;
      state.isError = !isApiStatusSuccess(action.payload);
    });
    builder.addCase(fetchActiveMenuDataApi.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(fetchTrendingProductsApi.rejected, state => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export default productSlice.reducer;
