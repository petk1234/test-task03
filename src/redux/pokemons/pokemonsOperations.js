import pokemonsActions from "./pokemonsActions";
import axios from "axios";
const baseUrl_ = "https://pokeapi.co/api/v2/pokemon/?limit=12";

const getTypes = () => async (dispatch) => {
  dispatch(pokemonsActions.getTypesRequest());
  const res = await axios.get("https://pokeapi.co/api/v2/type");
  dispatch(pokemonsActions.getTypesSuccess(res.data));
};

// const getPokemonInfo = (pokemonUrl) => (dispatch) => {
//   console.log("ff");
//   dispatch(pokemonsActions.getPokemonRequest());
//   axios
//     .get(pokemonUrl)
//     .then((res) => {
//       // console.log(res.data);
//       // return res.data;
//       dispatch(pokemonsActions.getPokemonSuccess(res.data));
//       res.data;
//     })
//     .catch((error) => dispatch(pokemonsActions.getPokemonError(error)));
// };
const getPokemonInfo = (pokemonUrl) => async (dispatch) => {
  // console.log("ff");
  // console.log(pokemonUrl);
  const res = await axios.get(pokemonUrl);
  const pokemon = await res.data;
  // dispatch(pokemonsActions.getPokemonSuccess(pokemon));
  // console.log(pokemon);
  return pokemon;
  // dispatch(pokemonsActions.getPokemonRequest());
  // axios
  //   .get(pokemonUrl)
  //   .then((res) => {
  //     // console.log(res.data);
  //     // return res.data;
  //     dispatch(pokemonsActions.getPokemonSuccess(res.data));
  //     res.data;
  //   })
  //   .catch((error) => dispatch(pokemonsActions.getPokemonError(error)));
};

// const getPokemonInfo = (pokemonUrl) => {
//   console.log("ff");
//   return axios.get(pokemonUrl).then((res) => {
//     console.log(res.data);
//     return res.data;
//   });
// };

const getPokemons =
  (baseUrl = baseUrl_) =>
  async (dispatch, getState) => {
    // dispatch(pokemonsActions.getPokemonsRequest());
    // axios
    //   .get(baseUrl)
    //   .then((resPokemons) => {
    //     console.log(resPokemons.data);
    //     dispatch(pokemonsActions.getPokemonsSuccess(resPokemons.data));

    //     resPokemons.data.results.filter((pokemon) => {
    //       dispatch(getPokemonInfo(pokemon.url));
    //     });
    //   })
    //   .catch((error) => pokemonsActions.getPokemonsError(error));
    const pokemonsLength = getState().pokemons.length + 12;
    dispatch(pokemonsActions.getPokemonsRequest());
    const resPokemons = await axios.get(baseUrl);
    console.log(resPokemons.data.results);
    const ff = await Promise.all(
      resPokemons.data.results.map((pokemon) => {
        return dispatch(getPokemonInfo(pokemon.url));
      })
    ).catch((error) => dispatch(pokemonsActions.getPokemonsError(error)));
    dispatch(pokemonsActions.getPokemonSuccess(ff));
    // dispatch(pokemonsActions.getPokemonsSuccess(resPokemons.data));
    dispatch(
      pokemonsActions.getPokemonsSuccess(
        `https://pokeapi.co/api/v2/pokemon/?offset=${pokemonsLength}&limit=12`
      )
    );
    console.log(ff);
    // })
  };

const getPokemonsByTypes = (type) => async (dispatch) => {
  dispatch(pokemonsActions.getPokemonsRequest());
  const resPokemons = await axios.get(
    `https://pokeapi.co/api/v2/type/${type}/?limit=12`
  );
  console.log(resPokemons.data.pokemon);
  const ff = await Promise.all(
    resPokemons.data.pokemon.map((pokemon) => {
      // console.log(pokemon);
      // console.log(pokemon.url);
      return dispatch(getPokemonInfo(pokemon.pokemon.url));
    })
  ).catch((error) => dispatch(pokemonsActions.getPokemonsError(error)));
  console.log(ff);
  dispatch(pokemonsActions.getPokemonSuccess(ff));
  dispatch(pokemonsActions.getPokemonsSuccess(resPokemons.data));
};
// const getPokemons = () => (dispatch) => {
//   dispatch(pokemonsActions.getPokemonsRequest());
//   axios
//     .get(baseUrl)
//     .then((resPokemons) => {
//       console.log(resPokemons.data);
//       dispatch(pokemonsActions.getPokemonsSuccess(resPokemons.data));
//       const pokemons = resPokemons.data.results.map(async (pokemon) => {
//         return await getPokemonInfo(pokemon.url);
//         //   axios.get(pokemon.url).then((resPokemon) => {
//         //     console.log(resPokemon.data);
//         //   });
//       });
//       // resPokemons.data.results.filter((pokemon) => {
//       //   dispatch(getPokemonInfo(pokemon.url));
//       // });
//       console.log(pokemons);
//       dispatch(pokemonsActions.getPokemonSuccess(pokemons));
//     })
//     .catch((error) => pokemonsActions.getPokemonsError(error));
// };

export default { getPokemons, getTypes, getPokemonsByTypes };
