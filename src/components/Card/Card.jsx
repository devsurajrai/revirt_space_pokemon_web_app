import { useState, useEffect } from "react";
import { fetchPokemonData } from "../../utils/fetchPokeonData";
import { CardFront } from "./CardFront.jsx";
import { CardBack } from "./CardBack.jsx";
import { Button } from "../Button.jsx";
import { useNavigate } from "react-router-dom";
import {
  selectfavourites,
  setfavourites,
} from "../../redux/slices/favouritesSlice";
import { useDispatch, useSelector } from "react-redux";
import { isPokemonInFavourites } from "../../utils/isPokemonInFavourites";
import { selectAuth } from "../../redux/slices/authSlice";
export const Card = ({ pokemonName, inFavourites }) => {
  const navigate = useNavigate();
  const [pokemonData, setPokemonData] = useState(null);
  const dispatch = useDispatch();
  const favourites = useSelector(selectfavourites);
  const isLoggedIn = useSelector(selectAuth);
  const shouldAddToFavourites = isPokemonInFavourites(favourites, pokemonName);
  const [isBackFaceVisible, setIsBackFaceVisible] = useState(false);
  useEffect(() => {
    fetchPokemonData(pokemonName, setPokemonData);
  }, [pokemonName]);
  return (
    <div className=" flex flex-col items-center">
      {pokemonData && (
        <>
          {!isBackFaceVisible && (
            <CardFront
              pokemonData={pokemonData}
              pokemonName={pokemonName}
              callback={() => setIsBackFaceVisible(!isBackFaceVisible)}
            />
          )}
          {isBackFaceVisible && (
            <CardBack
              stats={pokemonData.stats}
              callback={() => setIsBackFaceVisible(!isBackFaceVisible)}
            />
          )}
        </>
      )}
      {!inFavourites && (
        <Button
          className={`p-2 m-2 border-none rounded-md hover:opacity-80 bg-white w-[11rem] text-green-700 border-1 border-black mb-11`}
          buttonText="Add to favourites"
          callback={() => {
            if (isLoggedIn) {
              !shouldAddToFavourites && dispatch(setfavourites(pokemonData));
            } else {
              navigate("/login");
            }
          }}
        />
      )}
    </div>
  );
};
