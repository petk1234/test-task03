import usePokemonList from "./usePokemonsList";
import PokemonInfo from "../pokemon_info/PokemonInfo";
import Loader from "../loader/Loader";
import PokemonsCards from "../pokemons_cards/PokemonsCards";
import styles from "./pokemonList.module.scss";
export default function PokemonList() {
  const {
    pokemons,
    isLoading,
    activeType,
    clickedCard,
    partialContent,
    previousType,
    pokemons_partial,
    handleLoadMore,
    setClickedCard,
  } = usePokemonList();

  return (
    <section className={styles.pokemonsSection}>
      <div className={styles.pokemonsContainer}>
        <div className={styles.leftSide}>
          <ul className={styles.pokemonsList}>
            {isLoading !== "fetching typized pokemons" &&
              (activeType === "" ? (
                <PokemonsCards
                  pokemonsArr={pokemons}
                  setClickedCard={setClickedCard}
                />
              ) : (
                <PokemonsCards
                  pokemonsArr={pokemons_partial}
                  setClickedCard={setClickedCard}
                />
              ))}
          </ul>
          {isLoading !== "false" ? (
            <Loader />
          ) : (
            ((partialContent < pokemons.length && activeType !== "") ||
              activeType === "") && (
              <button className={styles.loadPokemons} onClick={handleLoadMore}>
                Load more
              </button>
            )
          )}
        </div>
        {clickedCard !== 0 && activeType === previousType && (
          <PokemonInfo pokemonId={clickedCard} />
        )}
      </div>
    </section>
  );
}
