import { useLocation, useNavigate } from "react-router-dom";
import { goToPokedex, gotToHomePage } from "../../routes/coordinator";
import {
  HeaderContainer,
  DivButtonLeft,
  DivButtonRight,
  DivHeader,
  DivTitle,
} from "./HeaderStyle";
import Titulo from "../../assets/images/titulo.png";
import { Button, ChakraProvider } from "@chakra-ui/react";
import Seta from "../../assets/icons/seta.svg";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const Header = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pokemons, setPokemons, pokedex, setPokedex, pokeData } =
    useContext(GlobalContext);

  const findPoke =
    pokedex && pokedex.find((pokemon) => pokemon.id === pokeData.id);

  const removerPokemon = () => {
    pokedex.filter((pokemon, index) => {
      if (pokemon.id === pokeData.id) {
        const removePokemon = [...pokemons, pokemon];
        setPokemons(removePokemon);
        pokedex.splice(index, 1);
        pokemons.push(pokemon);
        localStorage.setItem("poke", JSON.stringify(pokemons));
        localStorage.setItem("pokedex", JSON.stringify(pokedex));
      }
    });
  };

  const adicionarPokemon = () => {
    pokemons.filter((pokemon, index) => {
      if (pokemon.id === pokeData.id) {
        const addPokemon = [...pokedex, pokemon];
        setPokedex(addPokemon);
        pokemons.splice(index, 1);
        pokedex.push(pokemon);
        localStorage.setItem("poke", JSON.stringify(pokemons));
        localStorage.setItem("pokedex", JSON.stringify(pokedex));
      }
    });
  };

  return (
    <ChakraProvider>
      <HeaderContainer>
        {location.pathname === "/" ? (
          <DivHeader>
            <DivButtonLeft></DivButtonLeft>
            <DivTitle>
              <img src={Titulo} alt="Título" />
            </DivTitle>
            <DivButtonRight>
              <Button
                w={"200px"}
                h={"50px"}
                position={"absolute"}
                colorScheme="blue"
                onClick={() => goToPokedex(navigate)}
              >
                Pokedéx
              </Button>
            </DivButtonRight>
          </DivHeader>
        ) : location.pathname === "/pokedex" ? (
          <DivHeader>
            <DivButtonLeft>
              <img src={Seta} alt="seta icon" />
              <p onClick={() => gotToHomePage(navigate)}>Todos os Pokémons</p>
            </DivButtonLeft>
            <DivTitle>
              <img src={Titulo} alt="Título" />
            </DivTitle>
            <DivButtonRight></DivButtonRight>
          </DivHeader>
        ) : (
          <DivHeader>
            <DivButtonLeft>
              <img src={Seta} alt="seta icon" />
              <p onClick={() => gotToHomePage(navigate)}>Todos os Pokémons</p>
            </DivButtonLeft>
            <DivTitle>
              <img src={Titulo} alt="Título" />
            </DivTitle>
            <DivButtonRight>
              {findPoke ? (
                <Button
                  w={"200px"}
                  h={"50px"}
                  position={"absolute"}
                  colorScheme="red"
                  onClick={() => removerPokemon()}
                >
                  Excluir da Pokedéx
                </Button>
              ) : (
                <Button
                  w={"200px"}
                  h={"50px"}
                  position={"absolute"}
                  colorScheme="blue"
                  onClick={() => adicionarPokemon()}
                >
                  Adicionar a Pokedéx
                </Button>
              )}
            </DivButtonRight>
          </DivHeader>
        )}
      </HeaderContainer>
    </ChakraProvider>
  );
};

export default Header;
