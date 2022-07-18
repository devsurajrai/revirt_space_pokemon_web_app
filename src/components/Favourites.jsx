import { Card } from "./Card/Card.jsx";
import { selectfavourites } from "../redux/slices/favouritesSlice.js";
import { useSelector } from "react-redux";

export const Favourites = () => {
  const favourites = useSelector(selectfavourites);
  return (
    <div className="flex justify-center">
      {favourites.length !== 0 && (
        <div className=" w-[100vw]  grid grid-cols-4   bg-slate-300 min-h-[100vh] pt-10">
          {favourites.map((item) => {
            return (
              <Card
                key={item.name}
                pokemonName={item.name}
                inFavourites={true}
              />
            );
          })}
        </div>
      )}

      {favourites.length === 0 && (
        <div className="bg-yellow-300 h-[4rem] p-5 w-[30rem] flex justify-center mt-11 rounded-md ">
          <p className="text-xl font-semibold text-yellow-700">
            Nothing in favourites
          </p>
        </div>
      )}
    </div>
  );
};
