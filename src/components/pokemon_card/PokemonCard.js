import styles from "./pokemonCard.module.scss";
import cx from "classnames";
import { capitalLetter } from "../../usefulFunctions";
import notFoundImg from "../../images/not-found.png";
export default function PokemonCard({ pokemonInfo, setClickedCard }) {
  return (
    <li
      className={styles.pokemonCard}
      onClick={() => setClickedCard(pokemonInfo.id)}
    >
      <img
        className={styles.pokemonImage}
        src={pokemonInfo.sprites.front_default || notFoundImg}
      ></img>
      <h6 className={styles.cardTitle}>{capitalLetter(pokemonInfo.name)}</h6>
      <ul className={styles.typesList}>
        {pokemonInfo.types.map((type) => (
          <li
            className={cx(styles.pokemonType, styles[type.type.name])}
            key={type.slot}
          >
            {capitalLetter(type.type.name)}
          </li>
        ))}
      </ul>
    </li>
  );
}
