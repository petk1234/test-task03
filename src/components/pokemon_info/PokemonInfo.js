import { useSelector } from "react-redux";
export default function PokemonInfo({ pokemonId }) {
  const pokemons = useSelector((state) => state.pokemons);
  const [pokemonEl] = pokemons.filter((pokemon) => pokemon.id === pokemonId);
  console.log(pokemonEl);
  const findNeededStat = (neededStat, stats) => {
    return stats.filter((stat) => {
      if (stat.stat.name === neededStat) {
        return stat;
      }
    })[0].base_stat;
  };
  const findUniqueMoves = (movesArr) => {
    // const uniqueMovesArr = movesArr.filter(
    //   (move, position) => movesArr.lastIndexOf(moves) == position
    // );
    const uniqueMovesArr = [];
    const ee = movesArr.map((move) => {
      const ff = uniqueMovesArr.filter(
        (uniqueMove) => uniqueMove.move.name === move.name
      );
      if (ff.length === 0) {
        uniqueMovesArr.push(move);
      }
    });
    console.log(uniqueMovesArr);
    return uniqueMovesArr.length;
  };
  return (
    <li>
      <img src={pokemonEl.sprites.back_default}></img>
      <p>{pokemonEl.name}</p>
      <ul>
        <li>
          <p>Type:</p>
          <p>{pokemonEl.types.map((type) => type.type.name).toString()}</p>
        </li>
        <li>
          <p>Attack:</p>
          <p>{findNeededStat("attack", pokemonEl.stats)}</p>
        </li>
        <li>
          <p>Defense:</p>
          <p>{findNeededStat("defense", pokemonEl.stats)}</p>
        </li>
        <li>
          <p>HP:</p>
          <p>{findNeededStat("hp", pokemonEl.stats)}</p>
        </li>
        <li>
          <p>SP Attack:</p>
          <p>{findNeededStat("special-attack", pokemonEl.stats)}</p>
        </li>
        <li>
          <p>SP DEFENCE:</p>
          <p>{findNeededStat("special-defense", pokemonEl.stats)}</p>
        </li>
        <li>
          <p>Speed:</p>
          <p>{findNeededStat("speed", pokemonEl.stats)}</p>
        </li>
        <li>
          <p>Weight:</p>
          <p>{pokemonEl.weight}</p>
        </li>
        <li>
          <p>Total movies:</p>
          <p>{findUniqueMoves(pokemonEl.moves)}</p>
        </li>
      </ul>
    </li>
  );
}
