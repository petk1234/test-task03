import PokemonCard from "../pokemon_card/PokemonCard";

export default function PokemonsCards({ pokemonsArr, setClickedCard }) {
  return (
    <>
      {pokemonsArr.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemonInfo={pokemon}
          setClickedCard={setClickedCard}
        />
      ))}
    </>
  );
}
