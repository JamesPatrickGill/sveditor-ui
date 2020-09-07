<script>
  import IoMdAdd from "svelte-icons/io/IoMdAdd.svelte";

  import { layers } from "../../../modules/stores/stores.js";

  import Layer from "./Layer.svelte";
  import CreateLayerModal from "./CreateLayerModal.svelte";

  let open = false;

  const toggleModal = () => {
    open = !open;
  };
</script>

<div class="layers-viewer">
  <div class="heading">
    <div>
      Layers
    </div>
    <button class="add" on:click={toggleModal}>
      <IoMdAdd />
    </button>
  </div>
  <CreateLayerModal show={open} closeHandler={() => {open = false}}>"Hello"</CreateLayerModal>
  {#each Object.values($layers) as layer}
    <Layer title={layer.title} type={layer.type} />
  {/each}
</div>

<style>
    .layers-viewer {
        background: #2E3C43;
        width: 256px;
        display: flex;
        flex-direction: column;
        text-align: left;
        border-right: 2px solid black;
    }

    .heading {
        font-weight: normal;
        background: #1E272C;
        padding: 8px 16px;
        font-size: 20px;
        border-bottom: 2px solid black;
        display: flex;
        align-content: center;
        justify-content: space-between;
    }

    .add {
        height: 24px;
        width: 24px;
        background: transparent;
        padding: 0;
        color: #eceef0;
        border: 0;
        cursor: pointer;
    }

    .add:hover {
        background: #2E3C43;
    }

    .add:active {
        background: #12171a;
    }


</style>