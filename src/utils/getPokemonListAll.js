export const getPokemonListAll = (dispatch, getPokemonList) => {
  console.log("Exectuting getpokemonlist");
  console.log(pokemonsList);
  !pokemonsList && dispatch(getPokemonList());
};
