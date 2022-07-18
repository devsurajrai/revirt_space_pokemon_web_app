import { useState, useEffect } from "react";
import { fetchPokemonData } from "../../utils/fetchPokeonData";
import { CardFront } from "./CardFront.jsx";
import { CardBack } from "./CardBack.jsx";
import { Button } from "../Button.jsx";
import {
  selectfavourites,
  setfavourites,
} from "../../redux/slices/favouritesSlice";
import { useDispatch, useSelector } from "react-redux";
import { isPokemonInFavourites } from "../../utils/isPokemonInFavourites";
export const Card = ({ pokemonName, inFavourites }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const dispatch = useDispatch();
  const favourites = useSelector(selectfavourites);

  const shouldAddToFavourites = isPokemonInFavourites(favourites, pokemonName);
  useEffect(() => {
    fetchPokemonData(pokemonName, setPokemonData);
  }, [pokemonName]);
  return (
    <div className="relative flex flex-col items-center">
      {pokemonData && (
        <>
          <CardFront pokemonData={pokemonData} pokemonName={pokemonName} />
        </>
      )}
      <CardBack />
      {!inFavourites && (
        <Button
          className={`p-2 m-2 border-none rounded-md hover:opacity-80 bg-white w-[11rem] text-green-700 border-1 border-black mb-11`}
          buttonText="Add to favourites"
          callback={() => {
            !shouldAddToFavourites && dispatch(setfavourites(pokemonData));
          }}
        />
      )}
    </div>
  );
};
