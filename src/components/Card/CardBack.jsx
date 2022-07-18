import React from "react";
import { Stats } from "./Stats.jsx";

export const CardBack = ({ stats, callback }) => {
  console.log("card back stat", stats);
  return (
    <div
      className=" h-[20rem] w-[16rem] rounded-xl cursor-pointer shadow-md p-3 bg-gray-800"
      onMouseLeave={callback}
    >
      {stats &&
        stats.map((stat) => <Stats key={stat.stat.url} pokemonStat={stat} />)}
    </div>
  );
};
