import {
  findNeededStat,
  findUniqueMoves,
  typesToString,
  getValue,
} from "./pokemonInfoHelpings";
export default [
  { title: "Type", operation: typesToString, argument2: "" },
  { title: "Attack", operation: findNeededStat, argument2: "attack" },
  { title: "Defense", operation: findNeededStat, argument2: "defense" },
  { title: "HP", operation: findNeededStat, argument2: "hp" },
  {
    title: "SP Attack",
    operation: findNeededStat,
    argument2: "special-attack",
  },
  {
    title: "SP DEFENCE",
    operation: findNeededStat,
    argument2: "special-defense",
  },
  { title: "Speed", operation: findNeededStat, argument2: "speed" },
  { title: "Weight", operation: getValue, argument2: "weight" },
  { title: "Total movies", operation: findUniqueMoves, argument2: "" },
];
