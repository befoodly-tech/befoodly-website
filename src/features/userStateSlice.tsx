import { createSlice } from '@reduxjs/toolkit';
import { healthCheckApi } from '../actions/LoginActions';

const initialState = {
  isLoggedIn: false,
  data: {}
};

const userStateSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logIn: state => {
      state.isLoggedIn = true;
    },
    logOut: state => {
      state.isLoggedIn = false;
    }
  },
  extraReducers(builder) {
    builder.addCase(healthCheckApi.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  }
});

export const { logIn, logOut } = userStateSlice.actions;

export default userStateSlice.reducer;
