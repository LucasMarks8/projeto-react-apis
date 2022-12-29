import Poison from "../assets/images/poison.png";
import Fire from "../assets/images/fire.png";
import Water from "../assets/images/water.png";
import Flying from "../assets/images/flying.png";
import Bug from "../assets/images/bug.png";
import Normal from "../assets/images/normal.png";
import Grass from "../assets/images/grass.png";

export const typeIcons = (type) => {
  switch (type) {
    case "poison":
      return Poison;
    case "fire":
      return Fire;
    case "water":
      return Water;
    case "bug":
      return Bug;
    case "normal":
      return Normal;
    case "flying":
      return Flying;
    case "grass":
      return Grass;
    default:
      return "blue";
  }
};

export const backgroundCard = (type) => {
  switch (type) {
    case "grass":
      return "#729F92";
    case "fire":
      return "#EAAB7D";
    case "water":
      return "#71C3FF";
    case "bug":
      return "#76A866";
    case "normal":
      return "#BF9762";
    default:
      return "blue";
  }
};
