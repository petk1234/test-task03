import pokemonsActions from "./pokemonsActions";
import axios from "axios";
const baseUrl_ = "https://pokeapi.co/api/v2/pokemon/?limit=12";

const getTypes = () => async (dispatch) => {
  dispatch(pokemonsActions.getTypesRequest());
  const res = await axios.get("https://pokeapi.co/api/v2/type");
  dispatch(pokemonsActions.getTypesSuccess(res.data));
};

const getPokemonInfo = (pokemonUrl) => async (dispatch) => {
  const res = await axios.get(pokemonUrl);
  const pokemon = await res.data;
  return pokemon;
};

const getPokemons =
  (baseUrl = baseUrl_) =>
  async (dispatch, getState) => {
    const pokemonsLength = getState().pokemons.length + 12;
    dispatch(pokemonsActions.getPokemonsRequest());
    const resPokemons = await axios.get(baseUrl);
    const ff = await Promise.all(
      resPokemons.data.results.map((pokemon) => {
        return dispatch(getPokemonInfo(pokemon.url));
      })
    ).catch((error) => dispatch(pokemonsActions.getPokemonsError(error)));
    dispatch(pokemonsActions.getPokemonSuccess(ff));
    dispatch(
      pokemonsActions.getPokemonsSuccess(
        `https://pokeapi.co/api/v2/pokemon/?offset=${pokemonsLength}&limit=12`
      )
    );
  };

const getPokemonsByTypes = (type) => async (dispatch) => {
  dispatch(pokemonsActions.getTypesPokemonsRequest());
  const resPokemons = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
  // console.log(resPokemons.data.pokemon);
  const ff = await Promise.all(
    resPokemons.data.pokemon.map((pokemon) => {
      return dispatch(getPokemonInfo(pokemon.pokemon.url));
    })
  ).catch((error) => dispatch(pokemonsActions.getPokemonsError(error)));
  dispatch(pokemonsActions.getPokemonSuccess(ff));
  dispatch(pokemonsActions.getTypesPokemonsSuccess(resPokemons.data));
};

export default { getPokemons, getTypes, getPokemonsByTypes };
