import { Card } from "./Card/Card.jsx";
import { getPokemonList } from "../redux/slices/pokemonSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectPokemonsList } from "../redux/slices/pokemonSlice.js";
import { Pagination } from "./Pagination.jsx";
import { searchForPokemon } from "../utils/searchPokemon.js";
import { selectfavourites } from "../redux/slices/favouritesSlice.js";
export const ListingMain = () => {
  const [api, setApi] = useState("https://pokeapi.co/api/v2/pokemon");
  const [searchData, setSearchData] = useState([]);
  const pokemonList = useSelector(selectPokemonsList);
  const dispatch = useDispatch();
  const favourites = useSelector(selectfavourites);
  useEffect(() => {
    dispatch(getPokemonList(api));
  }, [api]);
  console.log(api, pokemonList);
  console.log(favourites);
  return (
    <main className="flex flex-col items-center bg-slate-300 min-h-[100vh] ">
      <h1 className=" text-4xl font-semibold p-4">Welcome to Pokemon Arena</h1>
      <section className="mt-5">
        <label htmlFor="search">
          <input
            className="shadow-md rounded-xl p-2 pl-4 w-[30vw] font-semibold outline-none"
            type="text"
            placeholder="Search"
            onChange={(event) =>
              searchForPokemon(setSearchData, pokemonList, event)
            }
          />
        </label>
      </section>
      <section className="w-[100vw] p-6 grid grid-cols-4 gap-5 place-items-center mt-16">
        {searchData.length !== 0
          ? searchData.map((item) => {
              return <Card key={item.name} pokemonName={item.name} />;
            })
          : pokemonList &&
            pokemonList.results.map((item) => {
              return <Card key={item.name} pokemonName={item.name} />;
            })}
      </section>
      <div>
        {searchData.length === 0 && (
          <Pagination pokemonList={pokemonList} setApi={setApi} />
        )}
      </div>
    </main>
  );
};
