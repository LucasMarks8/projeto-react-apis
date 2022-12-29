import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import {
  CardContainer,
  DivButton,
  DivCard,
  DivContainerImage,
  DivId,
  DivImage,
} from "./PokemonCard.Styled";
import { useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { backgroundCard, typeIcons } from "../../constants/constants";
import { Flex } from "@chakra-ui/react";
import PokeBall from "../../assets/images/pokebola.png";

const PokemonCard = () => {
  const navigate = useNavigate();
  const { pokemons, addToPokedex, setPokemons, setDetails } = useContext(GlobalContext);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    const newPokemons = [];

    for (let i = 1; i <= 21; i++) {
      axios
        .get(`${BASE_URL}/pokemon/${i}`)
        .then((response) => {
          console.log(response);
          newPokemons.push(response.data);
          if (newPokemons.length === 21) {
            const ordererList = newPokemons.sort((a, b) => {
              return a.id - b.id;
            });
            setPokemons(ordererList);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const pokeList = JSON.parse(localStorage.getItem("pokeList"));

  const getTypes = (pokemon) => {
    if (pokemon.types[1]) {
      return (
        <>
          <img src={typeIcons(pokemon.types[0].type.name)} alt={"pokemon"} />
          <img src={typeIcons(pokemon.types[1].type.name)} alt={"pokemon"} />
        </>
      );
    } else {
      return (
        <img src={typeIcons(pokemon.types[0].type.name)} alt={"pokemon"} />
      );
    }
  };

  let renderList = []

  if (pokeList) {
     renderList = pokeList
      .sort((a, b) => {
        console.log(a);
        console.log(b);
        return a.id - b.id;
      })
      .map((pokemon, index) => {
        return (<>
          <DivCard key={index}>
            <Flex
              w={"28.5vw"}
              h={"29vh"}
              borderRadius={"2rem"}
              bg={backgroundCard(pokemon.types[0].type.name)}
              backgroundImage={PokeBall}
              bgRepeat={"no-repeat"}
              bgPosition={"200px -50px"}
              bgSize={"60%"}
            >
              <DivId>
                <b>
                  <p className="id">#{pokemon.id}</p>
                </b>
                <b>
                  <h1>
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </h1>
                </b>
                <p>{getTypes(pokemon)}</p>
                <p
                  className="details"
                  onClick={() => [setDetails(pokemon), goToDetailsPage(navigate, pokemon.name)]}
                >
                  Detalhes
                </p>
              </DivId>
              <DivContainerImage>
                <DivImage>
                  <img
                    src={
                      pokemon.sprites?.other["official-artwork"].front_default
                    }
                    alt={pokemon.name}
                  />
                  <DivButton>
                    <button
                      className="add"
                      onClick={() => addToPokedex(pokemon, index)}
                    >
                      Capturar!
                    </button>
                  </DivButton>
                </DivImage>
              </DivContainerImage>
            </Flex>
          </DivCard>
          </>
        );
      });
  } else {
     renderList = pokemons
      .sort((a, b) => {
        return a.id - b.id;
      })
      .map((pokemon, index) => {
        return (
          <DivCard key={index}>
            <Flex
              w={"28.5vw"}
              h={"29vh"}
              borderRadius={"2rem"}
              bg={backgroundCard(pokemon.types[0].type.name)}
              backgroundImage={PokeBall}
              bgRepeat={"no-repeat"}
              bgPosition={"200px -50px"}
              bgSize={"60%"}
            >
              <DivId>
                <b>
                  <p className="id">#{pokemon.id}</p>
                </b>
                <b>
                  <h1>
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </h1>
                </b>
                <p>{getTypes(pokemon)}</p>
                <p
                  className="details"
                  onClick={() => [setDetails(pokemon), goToDetailsPage(navigate, pokemon.name)]}
                >
                  Detalhes
                </p>
              </DivId>
              <DivContainerImage>
                <DivImage>
                  <img
                    src={
                      pokemon.sprites?.other["official-artwork"].front_default
                    }
                    alt={pokemon.name}
                  />
                  <DivButton>
                    <button
                      className="add"
                      onClick={() => addToPokedex(pokemon, index)}
                    >
                      Capturar!
                    </button>
                  </DivButton>
                </DivImage>
              </DivContainerImage>
            </Flex>
          </DivCard>
        );
      });
  }

  // const renderList = pokeList
  //   ? pokeList
  //       .sort((a, b) => {
  //         console.log(a);
  //         console.log(b);
  //         return a.id - b.id;
  //       })
  //       .map((pokemon, index) => {
  //         return (
  //           <DivCard key={index}>
  //             <Flex
  //               w={"28.5vw"}
  //               h={"29vh"}
  //               borderRadius={"2rem"}
  //               bg={backgroundCard(pokemon.types[0].type.name)}
  //               backgroundImage={PokeBall}
  //               bgRepeat={"no-repeat"}
  //               bgPosition={"200px -50px"}
  //               bgSize={"60%"}
  //             >
  //               <DivId>
  //                 <b>
  //                   <p className="id">#{pokemon.id}</p>
  //                 </b>
  //                 <b>
  //                   <h1>
  //                     {pokemon.name.charAt(0).toUpperCase() +
  //                       pokemon.name.slice(1)}
  //                   </h1>
  //                 </b>
  //                 <p>{getTypes(pokemon)}</p>
  //                 <p
  //                   className="details"
  //                   onClick={() => goToDetailsPage(navigate, pokemon.name)}
  //                 >
  //                   Detalhes
  //                 </p>
  //               </DivId>
  //               <DivContainerImage>
  //                 <DivImage>
  //                   <img
  //                     src={
  //                       pokemon.sprites?.other["official-artwork"].front_default
  //                     }
  //                     alt={pokemon.name}
  //                   />
  //                   <DivButton>
  //                     <button
  //                       className="add"
  //                       onClick={() => addToPokedex(pokemon, index)}
  //                     >
  //                       Capturar!
  //                     </button>
  //                   </DivButton>
  //                 </DivImage>
  //               </DivContainerImage>
  //             </Flex>
  //           </DivCard>
  //         );
  //       })
  //   : pokemons
  //       .sort((a, b) => {
  //         return a.id - b.id;
  //       })
  //       .map((pokemon, index) => {
  //         return (
  //           <DivCard key={index}>
  //             <Flex
  //               w={"28.5vw"}
  //               h={"29vh"}
  //               borderRadius={"2rem"}
  //               bg={backgroundCard(pokemon.types[0].type.name)}
  //               backgroundImage={PokeBall}
  //               bgRepeat={"no-repeat"}
  //               bgPosition={"200px -50px"}
  //               bgSize={"60%"}
  //             >
  //               <DivId>
  //                 <b>
  //                   <p className="id">#{pokemon.id}</p>
  //                 </b>
  //                 <b>
  //                   <h1>
  //                     {pokemon.name.charAt(0).toUpperCase() +
  //                       pokemon.name.slice(1)}
  //                   </h1>
  //                 </b>
  //                 <p>{getTypes(pokemon)}</p>
  //                 <p
  //                   className="details"
  //                   onClick={() => goToDetailsPage(navigate, pokemon.name)}
  //                 >
  //                   Detalhes
  //                 </p>
  //               </DivId>
  //               <DivContainerImage>
  //                 <DivImage>
  //                   <img
  //                     src={
  //                       pokemon.sprites?.other["official-artwork"].front_default
  //                     }
  //                     alt={pokemon.name}
  //                   />
  //                   <DivButton>
  //                     <button
  //                       className="add"
  //                       onClick={() => addToPokedex(pokemon, index)}
  //                     >
  //                       Capturar!
  //                     </button>
  //                   </DivButton>
  //                 </DivImage>
  //               </DivContainerImage>
  //             </Flex>
  //           </DivCard>
  //         );
  //       });

  return <CardContainer>
    <p className="detailsWord">Todos os pokemons</p>
    <div className="card">{renderList}</div>
    </CardContainer>;
};

export default PokemonCard;
