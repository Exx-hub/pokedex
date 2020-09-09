import React from "react";

function Pokemon({ pokemon, removePokemon }) {
  return (
    <div className="pokemon-card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`}
        alt=""
      />
      <p>{pokemon.name}</p>
      <button onClick={() => removePokemon(pokemon.id)}>X</button>
    </div>
  );
}

export default Pokemon;
