import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import pokemonsActions from "../../redux/pokemons/pokemonsActions";
import pokemonsOperations from "../../redux/pokemons/pokemonsOperations";
export default function Filters() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemonsTypes.results);
  const [activeType, setActiveType] = useState("normal");
  useEffect(() => {
    dispatch(pokemonsOperations.getTypes());
  }, []);
  //   types !== undefined && setActiveType(types[0].name);
  //   console.log(types);
  //   console.log(activeType);
  console.log("filters");
  return (
    <>
      {/* <ul>
        {types !== undefined &&
          types.map((type) => (
            <li key={type.name}>
              <label htmlFor={type.name}>{type.name}</label>
              <input
                type="radio"
                id={type.name}
                name="types"
                onChange={() => setActiveType(type.name)}
              ></input>
            </li>
          ))}
      </ul> */}
      <select onChange={(e) => setActiveType(e.target.value)}>
        {types !== undefined &&
          types.map((type) => (
            <option
              key={type.name}
              value={type.name}
              //   onClick={() => setActiveType(type.name)}
              //   onSelect={() => setActiveType(type.name)}
            >
              {/* <input
                type="radio"
                id={type.name}
                name="types"
                onChange={() => setActiveType(type.name)}
              ></input> */}
              {type.name}
            </option>
          ))}
      </select>
      <button
        onClick={() => {
          dispatch(pokemonsOperations.getPokemonsByTypes(activeType));
          dispatch(pokemonsActions.setType(activeType));
        }}
      >
        Find
      </button>
    </>
  );
}
