import { getCapitalizedName } from "../../utils/getCapitalizedName";

export const CardFront = ({ pokemonData, pokemonName }) => {
  const pokemonNameCapitalized = getCapitalizedName(pokemonName);
  const { "official-artwork": officialArtwork } = pokemonData.sprites.other;
  const { front_default: pokemonImage } = officialArtwork;
  const { type: pokemonType } = pokemonData && pokemonData.types[0];
  const pokemonTypeCapitalized = getCapitalizedName(pokemonType.name);
  const { order } = pokemonData !== undefined && pokemonData;

  return (
    <div className="absolute flex flex-col items-center bg-white h-[20rem] w-[16rem] z-10 rounded-xl cursor-pointer hover:hidden shadow-md ">
      <div className="mt-5 rounded-full w-44 h-44 p-1  bg-red-700 flex items-center">
        <img
          className="rounded-full "
          src={pokemonImage}
          alt={`${pokemonName}_sprite`}
        />
      </div>
      <span className="inline-block mt-3">#{order}</span>
      <h3 className="text-black">{pokemonNameCapitalized}</h3>
      <h3 className="text-black">{pokemonTypeCapitalized}</h3>
    </div>
  );
};