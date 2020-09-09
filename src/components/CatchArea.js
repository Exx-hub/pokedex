import React from "react";

function CatchArea({ wildPokemon, addToPokedex }) {
  return (
    <div className="catch-area">
      <h1>Wild Encounter</h1>
      <img
        src={
          wildPokemon.sprites &&
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${wildPokemon.id}.png`
        }
        alt=""
      />
      <h2>{wildPokemon.name}</h2>

      <button onClick={() => addToPokedex(wildPokemon)}>Catch!</button>
    </div>
  );
}

export default CatchArea;
