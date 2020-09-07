import { generateRect } from "./generateRect";
import { generateCircle } from "./generateCircle";

export const generateLayers = (layersArray) => {
  return layersArray.reduce((accumulator, currentLayer) => {
    switch (currentLayer.type) {
      case "Rectangle":
        return `${accumulator}${generateRect(
          currentLayer.config,
          currentLayer.title
        )}`;
      case "Circle":
        return `${accumulator}${generateCircle(
          currentLayer.config,
          currentLayer.title
        )}`;
      default:
        return accumulator;
    }
  }, "");
};
