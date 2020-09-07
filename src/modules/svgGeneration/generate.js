import { generateLayers } from "./svgLayers/generateLayers";

export const generate = (layersObject) => {
  const documentConfig = layersObject.Document.config;
  const {
    ["Document"]: deleted,
    ...layersObjectWithoutDocumentKey
  } = layersObject;
  const orderedLayersArray = Object.values(layersObjectWithoutDocumentKey).sort(
    (a, b) => a.order - b.order
  );
  return `<svg width="${documentConfig.width}px" height="${
    documentConfig.height
  }px" viewBox="0 0 ${documentConfig.width} ${
    documentConfig.height
  }" xmlns="http://www.w3.org/2000/svg">${generateLayers(
    orderedLayersArray
  )}</svg>`;
};
