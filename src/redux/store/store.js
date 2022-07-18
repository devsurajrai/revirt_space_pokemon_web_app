import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "../slices/pokemonSlice";
import favouritesSlice from "../slices/favouritesSlice";
import authSlice from "../slices/authSlice";
export default configureStore({
  reducer: {
    pokemonSlice,
    favouritesSlice,
    authSlice,
  },
});
