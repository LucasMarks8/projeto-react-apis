import { useLocation, useNavigate } from "react-router-dom";
import { goToPokedex, gotToHomePage } from "../../routes/coordinator";
import HeaderContainer, {
  DivButtonLeft,
  DivButtonRight,
  DivHeader,
  DivTitle,
} from "./HeaderStyle";
import Titulo from "../../assets/images/titulo.png";
import { Button, ChakraProvider } from "@chakra-ui/react";
import Seta from "../../assets/icons/seta.svg";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const Header = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pokemons, setPokemons, pokedex, setPokedex, details, setDetails } =
    useContext(GlobalContext);
  console.log(pokedex);
  console.log(details);

  const findPokemon = () => {
    pokedex.filter((pokemon, index) => {
      if (pokemon.id === details.id) {
        const removePokemon = [...pokemons, pokemon];
        setPokemons(removePokemon);
        pokedex.splice(index, 1);
        pokemons.push(pokemon);
        localStorage.setItem("pokeList", JSON.stringify(pokemons));
        localStorage.setItem("pokedex", JSON.stringify(pokedex));
      } else {
        const addPokemon = [...pokedex, pokemon];
        setPokedex(addPokemon);
        console.log(addPokemon);
        pokemons.splice(index, 1);
        localStorage.setItem("pokeList", JSON.stringify(pokemons));
        localStorage.setItem("pokedex", JSON.stringify(addPokemon));
      }
    });
  };

  console.log(findPokemon);

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
              <p onClick={() => gotToHomePage(navigate)}>Todos Pokémons</p>
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
              <p onClick={() => gotToHomePage(navigate)}>Todos Pokémons</p>
            </DivButtonLeft>
            <DivTitle>
              <img src={Titulo} alt="Título" />
            </DivTitle>
            <DivButtonRight>
              {findPokemon ? (
                <Button
                  w={"200px"}
                  h={"50px"}
                  position={"absolute"}
                  colorScheme="red"
                  onClick={() => findPokemon()}
                >
                  Excluir da Pokedéx
                </Button>
              ) : (
                <Button
                  w={"200px"}
                  h={"50px"}
                  position={"absolute"}
                  colorScheme="blue"
                  onClick={() => findPokemon()}
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
