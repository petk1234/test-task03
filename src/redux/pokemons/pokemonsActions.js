import { createAction } from "@reduxjs/toolkit";

const getPokemonsRequest = createAction("pokemons/GetPokemonsRequest");
const getPokemonsSuccess = createAction("pokemons/GetPokemonsSuccess");
const getPokemonsError = createAction("pokemons/GetPokemonsError");

const getPokemonRequest = createAction("pokemons/GetPokemonRequest");
const getPokemonSuccess = createAction("pokemons/GetPokemonSuccess");
const getPokemonError = createAction("pokemons/GetPokemonError");

const getTypesRequest = createAction("pokemons/GetTypesRequest");
const getTypesSuccess = createAction("pokemons/GetTypesSuccess");
const getTypesError = createAction("pokemons/GetTypesError");

const getTypesPokemonsRequest = createAction(
  "pokemons/GetTypesPokemonsRequest"
);
const getTypesPokemonsSuccess = createAction(
  "pokemons/GetTypesPokemonsSuccess"
);
const getTypesPokemonsError = createAction("pokemons/GetTypesPokemonsError");

const setType = createAction("pokemons/SetType");
export default {
  getPokemonsRequest,
  getPokemonsSuccess,
  getPokemonsError,
  getPokemonRequest,
  getPokemonSuccess,
  getPokemonError,
  getTypesRequest,
  getTypesSuccess,
  getTypesError,
  getTypesPokemonsRequest,
  getTypesPokemonsSuccess,
  getTypesPokemonsError,
  setType,
};
