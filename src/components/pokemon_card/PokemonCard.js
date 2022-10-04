export default function PokemonCard({ pokemonInfo, setClickedCard }) {
  return (
    <li onClick={() => setClickedCard(pokemonInfo.id)}>
      <img src={pokemonInfo.sprites.back_default}></img>
      <p>{pokemonInfo.name}</p>
      <ul>
        {pokemonInfo.types.map((type) => (
          <li key={type.slot}>{type.type.name}</li>
        ))}
      </ul>
    </li>
  );
}
