const searchPokemon = (setSearchData, pokemonList, event) => {
  if (event.target.value === "") {
    setSearchData([]);
  } else {
    setSearchData(
      pokemonList.results.filter((pokemon) =>
        pokemon.name.includes(event.target.value)
      )
    );
  }
};

const debounceSearch = (searchFunction, delay) => {
  let clearPreviousSearch;
  return (setSearchData, pokemonList, event) => {
    clearPreviousSearch && clearTimeout(clearPreviousSearch);
    clearPreviousSearch = setTimeout(() => {
      searchFunction(setSearchData, pokemonList, event);
    }, delay);
  };
};

export const searchForPokemon = debounceSearch(searchPokemon, 500);
