import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const getPokemonList = createAsyncThunk("data/getPokemonList", async (API) => {
  const data = await axios.get(API);
  return data.data;
});
const initialState = {
  pokemonsList: null,
  error: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonsList: (state, action) => {
      state.pokemonsList = action.payload.results;
    },
  },
  extraReducers: {
    [getPokemonList.fulfilled]: (state, action) => {
      state.pokemonsList = action.payload;
    },
    [getPokemonList.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export const selectPokemonsList = (store) => store.pokemonSlice.pokemonsList;

export const { setPokemonsList, setPokemonsData } = pokemonSlice.actions;
export { getPokemonList };
export default pokemonSlice.reducer;
