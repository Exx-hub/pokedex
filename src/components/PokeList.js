import React from "react";
import Pokemon from "./Pokemon";

function PokeList({ pokedex, removePokemon }) {
  return (
    <div className="pokelist-container">
      <div className="pokelist">
        <h3>Pokedex</h3>
        {pokedex.map((pokemon) => (
          <Pokemon
            pokemon={pokemon}
            key={pokemon.id}
            removePokemon={removePokemon}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeList;
