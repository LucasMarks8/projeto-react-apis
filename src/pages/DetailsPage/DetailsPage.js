import { ChakraProvider, Flex, Progress } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { typeIcons, backgroundCard } from "../../constants/constants";
import PokeBall from "../../assets/images/pokebola.png";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import {
  ImageFront,
  ImageBack,
  StatsContainer,
  CardDetails,
  MovesContainer,
  ImageRightSide,
  DivDetails,
  DetailsContainer,
} from "./DetailsPage.Styled";

const DetailsPage = () => {
  const { pokeData, setPokeData } = useContext(GlobalContext);
  const params = useParams();

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = () => {
    const poke = []
    axios
      .get(`${BASE_URL}/pokemon/${params.name}`)
      .then((response) => {
        poke.push(response.data)
        setPokeData(poke);
        console.log(pokeData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const images = pokeData.map((pokemon, index) => {
    return (
      <>
        <ImageFront key={index}>
          <img src={pokemon.sprites?.["front_default"]} alt={pokemon.name} />
        </ImageFront>
        <ImageBack>
          <img src={pokemon.sprites?.["back_default"]} alt={pokemon.name} />
        </ImageBack>
        <ImageRightSide key={index}>
          <img
            src={pokemon.sprites?.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
        </ImageRightSide>
      </>
    );
  });

  const baseStates = pokeData.map((pokemon, index) => {
    return (
      <ChakraProvider>
        <StatsContainer key={index}>
          <h1>Base Stats</h1>
          {pokemon &&
            pokemon.stats.map((stat) => {
              return (
                <div className="stats" key={stat.stat.name}>
                  <span>
                    <b className="tittle">
                      {stat.stat.name.charAt(0).toUpperCase() +
                        stat.stat.name.slice(1)}
                    </b>{" "}
                    <b>{stat.base_stat}</b>
                  </span>
                  <Progress
                    colorScheme={"orange"}
                    size={"sm"}
                    value={stat.base_stat}
                    borderRadius={"8px"}
                  />
                </div>
              );
            })}
        </StatsContainer>
      </ChakraProvider>
    );
  });

  const moves = pokeData.map((pokemon, index) => {
    return (
      <MovesContainer key={index}>
        <h1>Moves</h1>
        {pokemon &&
          pokemon.moves.map((move, index) => {
            return index < 5 && <p key={move.move.name}>{move.move.name}</p>;
          })}
      </MovesContainer>
    );
  });
  console.log(moves);

  const card = pokeData.map((pokemon, index) => {
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
    console.log(getTypes);
    return (
      <CardDetails key={index}>
        <p className="id">#{pokemon.id}</p>
        <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        <div className="types">
          <p>{getTypes(pokemon)}</p>
        </div>
      </CardDetails>
    );
  });

  const backgroundColor = pokeData.map((pokemon) => {
    return (
      <Flex
        display={"flex"}
        w={"1389.14px"}
        h={"663px"}
        borderRadius={"37.8857px"}
        bg={backgroundCard(pokemon.types[0].type.name)}
        backgroundImage={PokeBall}
        bgRepeat={"no-repeat"}
        bgPosition={"610px -120px"}
        bgSize={"65%"}
      ></Flex>
    );
  });

  return (
    <ChakraProvider>
    <Header />
    <DetailsContainer>
        <p className="detailsWord">Detalhes</p>
        <div className="card"></div>
        <DivDetails>
          {backgroundColor}
          <div className="container">
            <div className="imgs">{images}</div>
            <div>{baseStates}</div>
            <div>{card}</div>
            <div>{moves}</div>
          </div>
        </DivDetails>
    </DetailsContainer>
    </ChakraProvider>
  );
};

export default DetailsPage;
