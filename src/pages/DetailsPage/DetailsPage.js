import { ChakraProvider, Flex, Progress } from "@chakra-ui/react";
import React, { useContext } from "react";

import Header from "../../components/Header/Header";
import { typeIcons, backgroundCard } from "../../constants/constants";
import PokeBall from "../../assets/images/pokebola.png";

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
  StatsGrid,
} from "./DetailsPage.Styled";

const DetailsPage = () => {
  const { pokeData } = useContext(GlobalContext);

  return (
    <ChakraProvider>
      <Header />
      <DetailsContainer>
        <p className="detailsWord">Detalhes</p>
        <div className="card"></div>
        <DivDetails>
          <Flex
            display={"flex"}
            w={"1389.14px"}
            h={"663px"}
            borderRadius={"37.8857px"}
            bg={backgroundCard(pokeData.types[0].type.name)}
            backgroundImage={PokeBall}
            bgRepeat={"no-repeat"}
            bgPosition={"610px -120px"}
            bgSize={"65%"}
          ></Flex>

          <>
            <ImageFront>
              <img
                src={pokeData.sprites?.["front_default"]}
                alt={pokeData.name}
              />
            </ImageFront>
            <ImageBack>
              <img
                src={pokeData.sprites?.["back_default"]}
                alt={pokeData.name}
              />
            </ImageBack>
            <ImageRightSide>
              <img
                src={pokeData.sprites?.other["official-artwork"].front_default}
                alt={pokeData.name}
              />
            </ImageRightSide>
          </>

          <ChakraProvider>
            <StatsContainer>
              <h1>Base Stats</h1>
              {pokeData.stats.map((stat) => {
                return (
                  <div className="stats" key={stat.stat.name}>
                    <StatsGrid>
                      <b className="title">
                        {stat.stat.name.charAt(0).toUpperCase() +
                          stat.stat.name.slice(1)}
                      </b>{" "}
                      <b>{stat.base_stat}</b>
                    </StatsGrid>
                    <Progress
                      colorScheme={stat.base_stat < 50 ? "orange" : "yellow"}
                      size={"md"}
                      value={stat.base_stat}
                      borderRadius={"8px"}
                      bg={"-moz-initial"}
                    />
                  </div>
                );
              })}
<span className="total">
              <b className="totalStats">
                Total{" "}</b>
                <b>{pokeData.stats?.reduce((acc, stat) => {
                  return acc + stat.base_stat;
                }, 0)}{" "}
              </b>
              </span>
            </StatsContainer>
          </ChakraProvider>

          <CardDetails>
            <p className="id">#{pokeData.id}</p>
            <h1>
              {pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)}
            </h1>
            <div className="types">
              <p>
                {pokeData.types.map((poke) => {
                  return (
                    <img src={typeIcons(poke.type.name)} alt={"pokemon"} />
                  );
                })}
              </p>
            </div>
          </CardDetails>

          <MovesContainer>
            <h1>Moves</h1>
            {pokeData.moves.map((move, index) => {
              return index < 5 && <p key={move.move.name}>{move.move.name}</p>;
            })}
          </MovesContainer>
        </DivDetails>
      </DetailsContainer>
    </ChakraProvider>
  );
};

export default DetailsPage;
