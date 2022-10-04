import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import pokemonsActions from "./pokemonsActions";
const nextQueries = createReducer("", {
  [pokemonsActions.getPokemonsSuccess]: (state, { type, payload }) =>
    // payload.next,
    payload,
});
// const previousQueries = createReducer("", {
//   [pokemonsActions.getPokemonsSuccess]: (state, { type, payload }) =>
//     payload.previous,
// });
const types = createReducer([], {
  [pokemonsActions.getTypesSuccess]: (state, { type, payload }) => payload,
});
// const pokemons = createReducer([], {
//   [pokemonsActions.getPokemonSuccess]: (state, { type, payload }) => {
//     // console.log(payload);
//     const doesConsist =
//       state.length > 0 &&
//       state.filter((statePokemon) => statePokemon.id == payload.id);
//     if (doesConsist.length > 0) {
//       return [...state];
//     } else {
//       return [...state, ...payload];
//     }
//   },
// });
const pokemons = createReducer([], {
  [pokemonsActions.getPokemonSuccess]: (state, { type, payload }) => {
    console.log(payload);
    if (payload.length <= 12) {
      const doesConsist =
        state.length > 0 &&
        state.filter(
          (statePokemon) =>
            payload.filter((pay) => pay.id == statePokemon.id)[0]
        );
      if (doesConsist.length > 0) {
        return [...state];
      } else {
        return [...state, ...payload];
      }
    } else {
      return [...payload];
    }
  },
});
const error = createReducer("", {
  [pokemonsActions.getPokemonsRequest]: () => "",
  [pokemonsActions.getPokemonsSuccess]: () => "",
  [pokemonsActions.getPokemonsError]: (state, { type, payload }) => payload,
});
const isLoading = createReducer(false, {
  [pokemonsActions.getPokemonsRequest]: () => true,
  [pokemonsActions.getPokemonsSuccess]: () => false,
  [pokemonsActions.getPokemonsError]: () => false,
});
const rootReducer = combineReducers({
  nextQueries,
  // previousQueries,
  pokemonsTypes: types,
  error,
  isLoading,
  pokemons: pokemons,
});
export default rootReducer;
