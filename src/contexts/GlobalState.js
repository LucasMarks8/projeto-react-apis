import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pokeData, setPokeData] = useState({});

  const addToPokedex = (pokemon, index) => {
    const addPokemon = [...pokedex, pokemon];
    setPokedex(addPokemon);
    pokemons.splice(index, 1);
    localStorage.setItem("poke", JSON.stringify(pokemons));
    localStorage.setItem("pokedex", JSON.stringify(addPokemon));
  };

  const removeToPokedex = (pokemon, index) => {
    const removePokemon = [...pokemons, pokemon];
    setPokemons(removePokemon);
    pokedex.splice(index, 1);
    pokemons.push(pokemon);
    localStorage.setItem("poke", JSON.stringify(pokemons));
    localStorage.setItem("pokedex", JSON.stringify(pokedex));
  };

  const context = {
    pokemons,
    setPokemons,
    pokedex,
    setPokedex,
    addToPokedex,
    removeToPokedex,
    pokeData,
    setPokeData,
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
};
