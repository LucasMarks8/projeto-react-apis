import { ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { HomeContainer } from "./HomePage.Styled;";

const PokemonHomePage = () => {
  const [isLoading] = useState(false);

  return (
    <ChakraProvider>
      <Header />
      <HomeContainer>{!isLoading ? <PokemonCard /> : " "}</HomeContainer>
    </ChakraProvider>
  );
};

export default PokemonHomePage;
