<script>
  import { generate } from "../../../modules/svgGeneration/generate";
  import { layers } from "../../../modules/stores/stores";


  let svgString;
  $: svgString = generate($layers);

  let svgWrapperStyle;
  $: svgWrapperStyle = `width: ${$layers.Document.config.width}px; height: ${$layers.Document.config.height}px`;
</script>

<div class="svg-area">
  <div class="svg-wrapper" style={svgWrapperStyle}>
    {@html svgString}
  </div>
</div>
<style>
    .svg-area {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #d7d7d7;
    }

    .svg-wrapper {
        background: #ffffff;
    }
</style>