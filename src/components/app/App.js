import PokemonList from "../pokemon_list/PokemonsList";
import Filters from "../filters/Filters";
import styles from "./app.module.scss";
function App() {
  return (
    <div className={styles.app}>
      <header className="App-header">
        <h1 className={styles.headerTitle}>Pokedex</h1>
      </header>
      <Filters />
      <PokemonList />
    </div>
  );
}

export default App;
