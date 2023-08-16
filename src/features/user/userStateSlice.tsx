import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false
};

export const userStateSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    logIn: state => {
      state.isLoggedIn = true;
    },
    logOut: state => {
      state.isLoggedIn = false;
    }
  }
});

export const { logIn, logOut } = userStateSlice.actions;

export default userStateSlice.reducer;
