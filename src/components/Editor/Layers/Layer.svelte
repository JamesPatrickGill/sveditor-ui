<script>
  import { activeLayerName, layers } from "../../../modules/stores/stores";

  export let type;
  export let title;

  import IoIosDocument from "svelte-icons/io/IoIosDocument.svelte";
  import FaRegSquare from "svelte-icons/fa/FaRegSquare.svelte";
  import FaRegCircle from "svelte-icons/fa/FaRegCircle.svelte";
  import FaRegTrashAlt from "svelte-icons/fa/FaRegTrashAlt.svelte";


  const icons = {
    "Document": IoIosDocument,
    "Rectangle": FaRegSquare,
    "Circle": FaRegCircle
  };

  const selectLayer = () => {
    activeLayerName.update(_ => title);
  };

  const deleteLayer = () => {
    layers.deleteLayer(title);
  };

</script>

<div class="layer-wrapper {title === $activeLayerName ? 'active' : ''}">
  <button class="layer {title === $activeLayerName ? 'active' : ''}" on:click={selectLayer}>
    <div class="icon">
      <svelte:component this="{icons[type]}" />
    </div>
    <div class="text">
      {title}
    </div>
  </button>
  {#if type !== "Document"}
    <button class="icon-smaller {title === $activeLayerName ? 'active' : ''}" on:click={deleteLayer}>
      <div class="icon-smaller-inner {title === $activeLayerName ? 'active-font' : ''}">
        <FaRegTrashAlt />
      </div>
    </button>
  {/if}
</div>

<style>
    .layer-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid black;

    }

    .layer {
        padding: 8px 16px;
        font-size: 14px;
        border: 0;
        color: #eceef0;
        display: flex;
        flex-direction: row;
        align-items: center;
        background: transparent;
        cursor: pointer;
        outline: 0;
        flex: 1;
    }

    .layer:hover {
        text-decoration: underline;
        background: #465b66;
    }

    .layer:active {
        background: #1E272C;
    }

    .layer:hover.active {
        text-decoration: underline;
        background: #00cbcb;
    }

    .layer:active.active {
        background: #008383;
    }


    .icon {
        height: 20px;
        width: 20px;
    }

    .icon-smaller {
        height: 36px;
        width: 36px;
        padding: 7px 4px;
        background: transparent;
        color: #eceef0;
        border: 0;
        cursor: pointer;
        outline: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon-smaller:hover {
        text-decoration: underline;
        background: #465b66;
    }

    .icon-smaller:active {
        background: #1E272C;
    }

    .icon-smaller:hover.active {
        text-decoration: underline;
        background: #00cbcb;
    }

    .icon-smaller:active.active {
        background: #008383;
    }

    .icon-smaller-inner {
        height: 18px;
        width: 18px;
    }

    .text {
        padding-left: 8px;
    }

    .active-font {
        color: #333333;
    }

    .active {
        background: #00eeee;
        color: #333333;
    }
</style>