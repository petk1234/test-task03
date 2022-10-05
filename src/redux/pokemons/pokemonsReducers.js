import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import pokemonsActions from "./pokemonsActions";

const addPokemons = (state, { type, payload }) => {
  if (payload.length <= 12) {
    const doesConsist =
      state.length > 0 &&
      state.filter(
        (statePokemon) => payload.filter((pay) => pay.id == statePokemon.id)[0]
      );
    if (doesConsist.length > 0) {
      return [...state];
    } else {
      return [...state, ...payload];
    }
  } else {
    return [...payload];
  }
};
const nextQueries = createReducer("", {
  [pokemonsActions.getPokemonsSuccess]: (state, { type, payload }) => payload,
});
const types = createReducer([], {
  [pokemonsActions.getTypesSuccess]: (state, { type, payload }) => payload,
});
const pokemons = createReducer([], {
  [pokemonsActions.getPokemonSuccess]: addPokemons,
});
const error = createReducer("", {
  [pokemonsActions.getPokemonsRequest]: () => "",
  [pokemonsActions.getPokemonsSuccess]: () => "",
  [pokemonsActions.getPokemonsError]: (state, { type, payload }) => payload,
});
const isLoading = createReducer("false", {
  [pokemonsActions.getPokemonsRequest]: () => "fetching random pokemons",
  [pokemonsActions.getPokemonsSuccess]: () => "false",
  [pokemonsActions.getPokemonsError]: () => "false",
  [pokemonsActions.getTypesPokemonsRequest]: () => "fetching typized pokemons",
  [pokemonsActions.getTypesPokemonsSuccess]: () => "false",
  [pokemonsActions.getTypesPokemonsError]: () => "false",
});
const activeType = createReducer("", {
  [pokemonsActions.setType]: (state, { action, payload }) => payload,
});
const rootReducer = combineReducers({
  nextQueries,
  activeType,
  pokemonsTypes: types,
  error,
  isLoading,
  pokemons: pokemons,
});
export default rootReducer;
