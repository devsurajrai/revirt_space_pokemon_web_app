import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userInfo: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const selectAuth = (store) => store.authSlice.isLoggedIn;
export const selectUserInfo = (store) => store.authSlice.userInfo;

export const { setAuth, setUserInfo } = authSlice.actions;

export default authSlice.reducer;
