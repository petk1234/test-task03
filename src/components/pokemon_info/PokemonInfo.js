import { useSelector } from "react-redux";
import styles from "./pokemonInfo.module.scss";
import PokemonInfoRow from "../pokemon_info_row/PokemonInfoRow";
import { capitalLetter } from "../../usefulFunctions";
import notFoundImg from "../../images/not-found.png";
import rowsParameters from "./rowsParameters";
export default function PokemonInfo({ pokemonId }) {
  const pokemons = useSelector((state) => state.pokemons);
  const [pokemonEl] = pokemons.filter((pokemon) => pokemon.id === pokemonId);

  return (
    <div className={styles.wrapper}>
      <li className={styles.pokemonInfoContainer}>
        <img
          className={styles.pokemonInfoImage}
          src={pokemonEl.sprites.front_default || notFoundImg}
        ></img>
        <h4 className={styles.pokemonInfoTitle}>
          {capitalLetter(pokemonEl.name)}
        </h4>
        <ul className={styles.pokemonInfoCharachteristics}>
          {rowsParameters.map((infoEl) => (
            <PokemonInfoRow
              key={infoEl.title}
              pokemonNeedings={infoEl}
              pokemonInfo={pokemonEl}
            />
          ))}
        </ul>
      </li>
    </div>
  );
}
