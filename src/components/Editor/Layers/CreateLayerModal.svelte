<script>
  import LayerTypeSelector from "./LayerTypeSelector.svelte";

  import { layers } from "../../../modules/stores/stores.js";

  export let show;

  export let closeHandler;

  import Modal from "../../Modal/Modal.svelte";
  import TextInput from "../../Elements/TextInput.svelte";
  import { configs } from "../../../modules/layerDefaults/layerConfigs";

  let layerName = "";
  let layerType;

  const setType = (type) => {
    layerType = type;
  };

  const createLayer = () => {
    layers.addLayer({
      [layerName]: {
        order: Object.keys($layers).length,
        type: layerType,
        title: layerName,
        config: configs[layerType]
      }
    });
    closeHandler();
  };
</script>

{#if show}
  <Modal>
    <h1>Create a layer</h1>
    <h3 class="sub-heading">Title</h3>
    <TextInput bind:value={layerName} placeholder="Enter a name for this layer..." />
    <h3 class="sub-heading">Type of Layer</h3>
    <LayerTypeSelector getType={setType} />
    <div class="actions">
      <button class="action secondary" on:click={closeHandler}>Cancel</button>
      <button class="action primary" on:click={createLayer}>Create Layer</button>
    </div>
  </Modal>
{/if}

<style>
    .sub-heading {
        border-bottom: 1px solid #eceef0;
    }

    .actions {
        padding-top: 32px;
        display: flex;
        justify-content: right;
        margin: 0 -8px;
    }

    .action {
        padding: 16px;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        margin: 0 8px;
        border: 0;
        width: 40%;
        outline: 0;
    }

    .primary {
        background: #00eeee;
        color: #1E272C;

    }

    .primary:hover {
        text-decoration: underline;
        background: #00cbcb;
    }

    .primary:focus {
        text-decoration: underline;
        background: #00cbcb;
    }

    .primary:active {
        background: #008383;
    }

    .secondary {
        background: transparent;
        color: #eceef0;
        border: 2px solid #eceef0;
    }

    .secondary:hover {
        text-decoration: underline;
        background: #465b66;
    }

    .secondary:focus {
        text-decoration: underline;
        background: #465b66;
    }

    .secondary:active {
        background: #1E272C;
    }


</style>