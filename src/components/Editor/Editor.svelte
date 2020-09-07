<script>
  import Layers from "./Layers/LayersView.svelte";
  import Configurator from "./Configurator/Configurator.svelte";
  import SvgView from "./SvgView/SvgView.svelte";
  import Previewer from "./Previewer/Previewer.svelte";
  import { activeLayerName, editorMode } from "../../modules/stores/stores";
</script>

<div class="editor">
  {#if $editorMode === 'editing'}
    <Layers />
  {/if}
  {#if $editorMode === 'previewing'}
    <Previewer />
  {/if}
  <SvgView />
  {#if $editorMode === 'editing'}
    <Configurator current={$activeLayerName} />
  {/if}
</div>

<style>
    .editor {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: stretch;
        overflow: hidden;
        width: 100%;
    }
</style>