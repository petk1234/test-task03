import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import pokemonsActions from "../../redux/pokemons/pokemonsActions";
import pokemonsOperations from "../../redux/pokemons/pokemonsOperations";
import styles from "./filters.module.scss";
export default function Filters() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemonsTypes.results);
  const [activeType, setActiveType] = useState("");
  const types_ = useMemo(() => ({ a: types }), [JSON.stringify(types)]);

  useEffect(() => {
    dispatch(pokemonsOperations.getTypes());
  }, []);

  useEffect(() => {
    types !== undefined && setActiveType(types[0].name);
  }, [types_]);

  const handleSearch = () => {
    dispatch(pokemonsOperations.getPokemonsByTypes(activeType));
    dispatch(pokemonsActions.setType(activeType));
  };
  return (
    <div>
      <select
        className={styles.typesSelector}
        onChange={(e) => setActiveType(e.target.value)}
      >
        {types !== undefined &&
          types.map((type) => (
            <option key={type.name} value={type.name}>
              {type.name}
            </option>
          ))}
      </select>
      <button className={styles.typeSearch} onClick={handleSearch}>
        Find
      </button>
    </div>
  );
}
