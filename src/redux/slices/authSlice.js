import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const selectAuth = (store) => store.authSlice.isLoggedIn;

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
