import styles from "./pokemonInfoRow.module.scss";
import { capitalLetter } from "../../usefulFunctions";
export default function PokemonInfoRow({ pokemonNeedings, pokemonInfo }) {
  const { title, operation, argument2 } = pokemonNeedings;
  return (
    <li className={styles.pokemonInfoRow}>
      <div className={styles.title}>{title}</div>
      <div className={styles.charachteristics}>
        {title === "Type"
          ? operation(pokemonInfo, argument2).map((type) => (
              <div className={styles.type} key={type}>
                {capitalLetter(type)}
              </div>
            ))
          : operation(pokemonInfo, argument2)}
      </div>
    </li>
  );
}
