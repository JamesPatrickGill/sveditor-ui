import { writable } from "svelte/store";

import { createLayersStore } from "./createLayersStore";

export const layers = createLayersStore({
  Document: {
    order: 0,
    type: "Document",
    title: "Document",
    config: { width: 400, height: 400 },
  },
});
export const activeLayerName = writable(null);
export const editorMode = writable("editing");
