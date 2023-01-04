export const gotToHomePage = (navigate) => {
  navigate(`/`);
};

export const goToPokedex = (navigate) => {
  navigate(`/pokedex`);
};

export const goToDetailsPage = (navigate, name) => {
  navigate(`/detalhes/${name}/`);
};
