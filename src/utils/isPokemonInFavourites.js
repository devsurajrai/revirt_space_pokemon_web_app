export const isPokemonInFavourites = (favourites, pokemonName) => {
  return favourites.find((pokemon) => pokemon.forms[0].name === pokemonName);
};
