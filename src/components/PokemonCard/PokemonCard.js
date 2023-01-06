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
  const { pokemons, addToPokedex, setPokemons, setPokeData } =
    useContext(GlobalContext);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = () => {
    const newPokemons = [];
    const poke = JSON.parse(localStorage.getItem("poke"));

    if (poke === null) {
      for (let i = 1; i <= 21; i++) {
        axios
          .get(`${BASE_URL}/pokemon/${i}`)
          .then((response) => {
            newPokemons.push(response.data);
            if (newPokemons.length > 0) {
              const ordererList = newPokemons.sort((a, b) => {
                return a.id - b.id;
              });
              localStorage.setItem("poke", JSON.stringify(ordererList));
              const poke = JSON.parse(localStorage.getItem("poke"));
              setPokemons(poke);
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    } else {
      setPokemons(poke);
    }
  };

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

  return (
    <CardContainer>
      <p className="detailsWord">Todos os pokemons</p>
      <div className="card">
        {pokemons &&
          pokemons
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
                        onClick={() => {
                          setPokeData(pokemon);
                          goToDetailsPage(navigate, pokemon.name);
                        }}
                      >
                        Detalhes
                      </p>
                    </DivId>
                    <DivContainerImage>
                      <DivImage>
                        <img
                          src={
                            pokemon.sprites?.other["official-artwork"]
                              .front_default
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
            })}
      </div>
    </CardContainer>
  );
};

export default PokemonCard;
