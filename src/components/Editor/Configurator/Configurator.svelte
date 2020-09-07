<script>
  import { fly } from "svelte/transition";

  export let current;
  import RectConfigurator from "./ConfiguratorComponents/RectConfigurator.svelte";
  import DocumentConfigurator from "./ConfiguratorComponents/DocumentConfigurator.svelte";
  import CircleConfigurator from "./ConfiguratorComponents/CircleConfigurator.svelte";
  import { layers } from "../../../modules/stores/stores";

  const ConfiguratorComponents = {
    Rectangle: RectConfigurator,
    Document: DocumentConfigurator,
    Circle: CircleConfigurator
  };

  const updateConfig = (newConfig) => {
    layers.updateLayerConfig($layers[current].title, newConfig);
  };
</script>

{#each Object.values($layers) as layer}
  {#if layer.title === current}
    <div class="configurator">
      <svelte:component this={ConfiguratorComponents[layer.type]} {...{
        getConfig: updateConfig,
        config: layer.config
      }} />
    </div>
  {/if}
{/each}


<style>
    .configurator {
        background: #2E3C43;
        width: 300px;
        display: flex;
        flex-direction: column;
        text-align: left;
        border-left: 2px solid black;
        overflow-y: scroll;
    }
</style>