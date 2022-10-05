import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import pokemonsOperations from "../../redux/pokemons/pokemonsOperations";
import PokemonCard from "../pokemon_card/PokemonCard";
import PokemonInfo from "../pokemon_info/PokemonInfo";
import Loader from "../loader/Loader";
export default function PokemonList() {
  const dispatch = useDispatch();
  const [pokemons, nextPokemons, isLoading, activeType] = useSelector(
    (state) => [
      state.pokemons,
      state.nextQueries,
      state.isLoading,
      state.activeType,
    ]
  );
  // console.log(pokemons);
  const [clickedCard, setClickedCard] = useState(0);
  const [partialContent, setPartialContent] = useState(12);
  const [previousType, setPreviousType] = useState("");
  // const [pokemons_partial, setPokemonsPartial] = useState([]);
  let pokemons_partial = [];
  if (activeType !== previousType) {
    setPartialContent(12);
    setPreviousType(activeType);
    setClickedCard(0);
    console.log("dsd");
  }
  if (activeType !== "") {
    for (let i = 0; i < partialContent; i++) {
      pokemons_partial.push(pokemons[i]);
    }
  }
  const handleLoadMore = () => {
    if (activeType === "") {
      dispatch(pokemonsOperations.getPokemons(nextPokemons));
    } else if (pokemons.length - partialContent > 12) {
      setPartialContent(partialContent + 12);
    } else {
      setPartialContent(pokemons.length);
    }
    setClickedCard(0);
  };
  useEffect(() => {
    // console.log("ddd");
    // console.log(activeType);
    // console.log(pokemons);
    dispatch(pokemonsOperations.getPokemons());
    // if (activeType !== previousType) {
    //   setPartialContent(12);
    //   setPreviousType(activeType);
    //   setClickedCard(0);
    //   console.log("dsd");
    // }
    // if (activeType !== "") {
    //   let rr = [];
    //   for (let i = 0; i < partialContent; i++) {
    //     // pokemons_partial.push(pokemons[i]);
    //     console.log(pokemons[i]);
    //     rr.push(pokemons[i]);
    //     // setPokemonsPartial(() => pokemons_partial.concat(pokemons[i]));
    //   }
    //   console.log(rr);
    //   // setPokemonsPartial(() => pokemons_partial.concat(rr));
    //   setPokemonsPartial(rr);
    // }
  }, []);
  // console.log(pokemons_partial);
  return (
    <div>
      <ul>
        {isLoading !== "fetching typized pokemons" &&
          (activeType === ""
            ? pokemons.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemonInfo={pokemon}
                  setClickedCard={setClickedCard}
                />
              ))
            : pokemons_partial.map((pokemon) => (
                <PokemonCard
                  key={pokemon.id}
                  pokemonInfo={pokemon}
                  setClickedCard={setClickedCard}
                />
              )))}
      </ul>
      {clickedCard !== 0 && <PokemonInfo pokemonId={clickedCard} />}
      {isLoading !== "false" ? (
        <Loader />
      ) : (
        ((partialContent < pokemons.length && activeType !== "") ||
          activeType === "") && (
          <button onClick={handleLoadMore}>Load more</button>
        )
      )}
    </div>
  );
}
