import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import HomeContainer from './HomePage.Styled;'

const PokemonHomePage = () => {
  const [isLoading] = useState(false)

  return (
    <HomeContainer>
      <Header />
      {!isLoading ? <PokemonCard /> : " " }
    </HomeContainer>
  )
}

export default PokemonHomePage