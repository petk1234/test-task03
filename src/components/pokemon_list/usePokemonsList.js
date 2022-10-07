import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import pokemonsActions from "../../redux/pokemons/pokemonsActions";
import pokemonsOperations from "../../redux/pokemons/pokemonsOperations";
export default function usePokemonList() {
  const dispatch = useDispatch();

  const [pokemons, nextPokemons, isLoading, activeType] = useSelector(
    (state) => [
      state.pokemons,
      state.nextQueries,
      state.isLoading,
      state.activeType,
    ]
  );
  const [clickedCard, setClickedCard] = useState(0);
  const [partialContent, setPartialContent] = useState(12);
  const [previousType, setPreviousType] = useState("");
  const [pokemons_partial, setPokemonsPartial] = useState([]);

  const pokemons_ = useMemo(
    () => ({
      a: pokemons,
    }),
    [JSON.stringify(pokemons)]
  );

  const handleLoadMore = () => {
    setClickedCard(0);
    if (activeType === "") {
      dispatch(pokemonsOperations.getPokemons(nextPokemons));
    } else if (pokemons.length - partialContent > 12) {
      dispatch(pokemonsActions.setLoading());
      setPartialContent(partialContent + 12);
      setTimeout(() => dispatch(pokemonsActions.unsetLoading()), 500);
    } else {
      dispatch(pokemonsActions.setLoading());
      setPartialContent(pokemons.length);
      setTimeout(() => dispatch(pokemonsActions.unsetLoading()), 500);
    }
  };

  useEffect(() => {
    dispatch(pokemonsOperations.getPokemons());
  }, []);

  useEffect(() => {
    if (activeType !== previousType) {
      setPartialContent(12);
      setPreviousType(activeType);
      setClickedCard(0);
    }
    if (activeType !== "") {
      let rr = [];
      for (let i = 0; i < partialContent; i++) {
        rr.push(pokemons[i]);
      }
      setPokemonsPartial(rr);
    }
  }, [partialContent, pokemons_]);

  return {
    pokemons,
    isLoading,
    activeType,
    clickedCard,
    partialContent,
    previousType,
    pokemons_partial,
    handleLoadMore,
    setClickedCard,
  };
}
