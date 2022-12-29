import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [details, setDetails] = useState()

  const addToPokedex = (pokemon, index) => {
    const addPokemon = [...pokedex, pokemon];
    setPokedex(addPokemon);
    console.log(addPokemon);
    pokemons.splice(index, 1);
    localStorage.setItem("pokeList", JSON.stringify(pokemons));
    localStorage.setItem("pokedex", JSON.stringify(addPokemon));
  };

  //   const onClickRemove = (pokemon, id) => {
  //     const newPoke = [...pokedex, pokemon];
  //     for (let i = 0; i < pokedex.length; i++) {
  //       if (newPoke[i].id === id) {
  //         pokedex.splice(i, 1);
  //         pokemons.push(pokemon);
  //         localStorage.setItem("pokeList", JSON.stringify(pokemons));
  //         localStorage.setItem("pokedex", JSON.stringify(pokedex));
  //       }
  //       setPokemons(newPoke);
  //     }
  //   };

//   const removeToPokedex = (pokeId) => {
//     const removeId = pokedex.filter((i) => {
//       if (i.id === pokeId.id) {
//         pokedex.splice(pokeId, 1);
//         pokemons.push(i);
//         const newPoke = [...pokedex];
//         setPokedex(newPoke);
//         localStorage.setItem("pokeList", JSON.stringify(pokemons));
//         localStorage.setItem("pokedex", JSON.stringify(pokedex));
//       }
//     });
//   };

    const removeToPokedex = (pokemon, index) => {
      const removePokemon = [...pokemons, pokemon];
      setPokemons(removePokemon);
      pokedex.splice(index, 1);
      pokemons.push(pokemon);
      localStorage.setItem("pokeList", JSON.stringify(pokemons));
      localStorage.setItem("pokedex", JSON.stringify(pokedex));
    };

  const context = {
    pokemons,
    setPokemons,
    pokedex,
    setPokedex,
    addToPokedex,
    removeToPokedex,
    details, 
    setDetails
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
};
