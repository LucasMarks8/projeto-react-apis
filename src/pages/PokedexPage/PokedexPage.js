import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import {
  CardContainer,
  DivButton,
  DivCard,
  DivContainerImage,
  DivId,
  DivImage,
} from "../../components/PokemonCard/PokemonCard.Styled";
import { backgroundCard, typeIcons } from "../../constants/constants";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToDetailsPage } from "../../routes/coordinator";
import PokeBall from "../../assets/images/pokebola.png";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { PokedexContainer } from "./PokedexPage.Styled";

const PokedexPage = () => {
  const navigate = useNavigate();
  const { removeToPokedex, setPokedex, pokedex, setPokeData } =
    useContext(GlobalContext);

  useEffect(() => {
    const storagePokedex = JSON.parse(localStorage.getItem("pokedex"));
    if (storagePokedex !== null) {
      setPokedex(storagePokedex);
    }
  }, [setPokedex]);

  const pokedexList = pokedex.map((pokemon, index) => {
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
      <DivCard key={index}>
        <Flex
          w={"28.5vw"}
          h={"29vh"}
          borderRadius={"2rem"}
          bg={backgroundCard(pokemon.types[0].type.name)}
          backgroundImage={PokeBall}
          bgRepeat={"no-repeat"}
        >
          <DivId>
            <b>
              <p className="id">#{pokemon.id}</p>
            </b>
            <b>
              <h1>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
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
                src={pokemon.sprites?.other["official-artwork"].front_default}
                alt={pokemon.name}
              />
              <DivButton>
                <button
                  className="remove"
                  onClick={() => removeToPokedex(pokemon, index)}
                >
                  Excluir
                </button>
              </DivButton>
            </DivImage>
          </DivContainerImage>
        </Flex>
      </DivCard>
    );
  });
  return (
    <ChakraProvider>
      <Header />
      <PokedexContainer>
        <CardContainer>
          <p className="detailsWord">Meus pokemons</p>
          <div className="card">{pokedexList}</div>
        </CardContainer>
      </PokedexContainer>
    </ChakraProvider>
  );
};

export default PokedexPage;
