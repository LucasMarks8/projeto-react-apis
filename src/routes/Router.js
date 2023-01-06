import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import HomePage from "../pages/HomePage/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detalhes/:name" element={<DetailsPage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
