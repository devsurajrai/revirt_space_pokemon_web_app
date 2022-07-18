import { getCapitalizedName } from "../../utils/getCapitalizedName";
export const Stats = ({ pokemonStat }) => {
  const statNameCapitalized = getCapitalizedName(pokemonStat.stat.name);
  return (
    <div className="p-2 w-full flex justify-between items-center">
      <span className="w-[10ch] text-slate-200">{statNameCapitalized}</span>
      <section className="bg-red-300 h-[.4rem] w-[11rem] ml-2">
        <div
          style={{ width: `${pokemonStat.base_stat}%` }}
          className={`h-full  bg-orange-700`}
        ></div>
      </section>
      <span className=" text-slate-200 ml-2">{pokemonStat.base_stat}</span>
    </div>
  );
};
