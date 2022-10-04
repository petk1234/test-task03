import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import pokemonsOperations from "../../redux/pokemons/pokemonsOperations";
export default function Filters() {
  const dispatch = useDispatch();
  const [activeType, setActiveType] = useState("");
  useEffect(() => {
    dispatch(pokemonsOperations.getTypes());
  }, []);
  const types = useSelector((state) => state.pokemonsTypes.results);
  console.log(types);
  return (
    <>
      <ul>
        {/* {types.map((type) => (
          //   <li></li>
          <input type="radio" id={type.name}></input>
        ))} */}
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
      </ul>
      <button
        onClick={() =>
          dispatch(pokemonsOperations.getPokemonsByTypes(activeType))
        }
      ></button>
    </>
  );
}
