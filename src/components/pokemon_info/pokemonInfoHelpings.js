const findNeededStat = (pokemonEl, neededStat) => {
  return pokemonEl.stats.filter((stat) => {
    if (stat.stat.name === neededStat) {
      return stat;
    }
  })[0].base_stat;
};
const findUniqueMoves = (pokemonEl) => {
  const uniqueMovesArr = [];
  const ee = pokemonEl.moves.map((move) => {
    const ff = uniqueMovesArr.filter(
      (uniqueMove) => uniqueMove.move.name === move.name
    );
    if (ff.length === 0) {
      uniqueMovesArr.push(move);
    }
  });
  return uniqueMovesArr.length;
};
const typesToString = (pokemonEl) =>
  pokemonEl.types
    .map((type) => type.type.name)
    .toString()
    .split(",");
const getValue = (pokemonEl, value) => {
  return pokemonEl[value];
};

export { findNeededStat, findUniqueMoves, typesToString, getValue };
