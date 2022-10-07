import pokemonsActions from "./pokemonsActions";
import axios from "axios";
const baseUrl_ = "https://pokeapi.co/api/v2/pokemon/?limit=12";

const getTypes = () => async (dispatch) => {
  dispatch(pokemonsActions.getTypesRequest());
  const res = await axios
    .get("https://pokeapi.co/api/v2/type")
    .catch((error) => dispatch(pokemonsActions.getTypesError(error)));
  dispatch(pokemonsActions.getTypesSuccess(res.data));
};

const getPokemonInfo = async (pokemonUrl) => {
  const res = await axios.get(pokemonUrl);
  const pokemon = await res.data;
  return pokemon;
};

const getPokemons =
  (baseUrl = baseUrl_) =>
  async (dispatch) => {
    dispatch(pokemonsActions.getPokemonsRequest());
    const resPokemons = await axios.get(baseUrl);
    const ff = await Promise.all(
      resPokemons.data.results.map((pokemon) => {
        return getPokemonInfo(pokemon.url);
      })
    ).catch((error) => dispatch(pokemonsActions.getPokemonsError(error)));
    dispatch(pokemonsActions.getPokemonSuccess(ff));
    dispatch(pokemonsActions.getPokemonsSuccess(resPokemons.data.next));
  };

const getPokemonsByTypes = (type) => async (dispatch) => {
  dispatch(pokemonsActions.getTypesPokemonsRequest());
  const resPokemons = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
  const ff = await Promise.all(
    resPokemons.data.pokemon.map((pokemon) => {
      return getPokemonInfo(pokemon.pokemon.url);
    })
  ).catch((error) => dispatch(pokemonsActions.getPokemonsError(error)));
  dispatch(pokemonsActions.getPokemonSuccess(ff));
  dispatch(pokemonsActions.getTypesPokemonsSuccess(resPokemons.data));
};

export default { getPokemons, getTypes, getPokemonsByTypes };
