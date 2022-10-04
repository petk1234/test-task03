import PokemonList from "./components/pokemon_list/PokemonsList";
import Filters from "./components/filters/Filters";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
        <Filters />
        <PokemonList />
      </header>
    </div>
  );
}

export default App;
