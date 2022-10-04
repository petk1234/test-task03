import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import pokemonsOperations from "../../redux/pokemons/pokemonsOperations";
import PokemonCard from "../pokemon_card/PokemonCard";
import PokemonInfo from "../pokemon_info/PokemonInfo";
import Loader from "../loader/Loader";
export default function PokemonList() {
  const dispatch = useDispatch();
  const [pokemons, nextPokemons, isLoading] = useSelector((state) => [
    state.pokemons,
    state.nextQueries,
    state.isLoading,
  ]);
  const [clickedCard, setClickedCard] = useState(0);
  useEffect(() => {
    dispatch(pokemonsOperations.getPokemons());
  }, []);
  // console.log(pokemons);
  return (
    <div>
      <ul>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemonInfo={pokemon}
            setClickedCard={setClickedCard}
          />
        ))}
      </ul>
      {clickedCard !== 0 && <PokemonInfo pokemonId={clickedCard} />}
      {isLoading ? (
        <Loader />
      ) : (
        <button
          onClick={() => {
            dispatch(pokemonsOperations.getPokemons(nextPokemons));
            setClickedCard(0);
          }}
        >
          Load more
        </button>
      )}
    </div>
  );
}
