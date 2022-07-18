import React from "react";
import { Button } from "./Button.jsx";

export const Pagination = ({ pokemonList, setApi }) => {
  return (
    <div className="h-[3rem] w-[30vw] mb-4 rounded-md flex justify-center">
      {pokemonList?.previous && (
        <Button
          className={`p-1 m-2 border-none rounded-md hover:opacity-80 bg-white w-[8rem] text-green-700 `}
          buttonText="Previous"
          callback={() => setApi(pokemonList.previous)}
        />
      )}
      {pokemonList?.next && (
        <Button
          className={`p-1 m-2 border-none rounded-md hover:opacity-80 bg-white w-[8rem] text-green-700`}
          buttonText="Next"
          callback={() => setApi(pokemonList.next)}
        />
      )}
    </div>
  );
};
