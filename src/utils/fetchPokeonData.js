export const fetchPokemonData = async (pokemonName, setPokemonData) => {
  try {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const jsonData = await data.json();
    setPokemonData(jsonData);
  } catch (error) {
    console.log("something went wrong", error);
  }
};
