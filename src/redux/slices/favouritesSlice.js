import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    setfavourites: (state, action) => {
      state.favourites = [action.payload, ...state.favourites];
    },
  },
});

export const selectfavourites = (store) => store.favouritesSlice.favourites;

export const { setfavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
