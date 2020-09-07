import { writable } from "svelte/store";

export function createLayersStore(value = {}) {
  const store = writable(value);

  const addLayer = (newLayer) => {
    store.update((val) => {
      return { ...val, ...newLayer };
    });
  };

  const updateLayerConfig = (layerName, newConfig) => {
    store.update((val) => {
      return { ...val, [layerName]: { ...val[layerName], config: newConfig } };
    });
  };

  const deleteLayer = (layerName) => {
    store.update((val) => {
      const { [layerName]: deleted, ...valWithRemoved } = val;
      return Object.values(valWithRemoved)
        .sort((a, b) => a.order - b.order)
        .map((layer, index) => {
          return { ...layer, order: index };
        })
        .reduce((accumulator, normalisedLayer) => {
          return { ...accumulator, [normalisedLayer.title]: normalisedLayer };
        }, {});
    });
  };

  return {
    ...store,
    addLayer,
    updateLayerConfig,
    deleteLayer,
  };
}
