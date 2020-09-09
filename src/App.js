import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Header from "./components/Header";
import CatchArea from "./components/CatchArea";
import PokeList from "./components/PokeList";

function App() {
  const [wildPokemon, setWildPokemon] = useState({});
  const [pokedex, setPokedex] = useState([]);

  const randomNumber = Math.floor(Math.random() * 151) + 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

  useEffect(() => {
    findPokemon();

    // eslint-disable-next-line
  }, []);

  const findPokemon = async () => {
    const result = await axios.get(url);
    setWildPokemon(result.data);
  };

  const addToPokedex = (pokemon) => {
    let filtered = pokedex.filter((item) => item.id === pokemon.id);

    if (!filtered.length > 0) {
      setPokedex((prevState) => [...prevState, pokemon]);
    }

    findPokemon();
  };

  const removePokemon = (id) => {
    let filtered = pokedex.filter((item) => item.id !== id);
    setPokedex([...filtered]);
  };

  return (
    <div className="App">
      <Header />
      <CatchArea wildPokemon={wildPokemon} addToPokedex={addToPokedex} />
      <PokeList pokedex={pokedex} removePokemon={removePokemon} />
    </div>
  );
}

export default App;
