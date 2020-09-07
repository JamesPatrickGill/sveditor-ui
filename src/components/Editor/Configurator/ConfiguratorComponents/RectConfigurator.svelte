<script>
  import { configs } from "../../../../modules/layerDefaults/layerConfigs";
  import NumberInput from "../../../Elements/NumberInput.svelte";
  import ColorInput from "../../../Elements/ColorInput.svelte";
  import TextInput from "../../../Elements/TextInput.svelte";

  export let getConfig;
  export let config;

  let x = config.x;
  let y = config.y;
  let width = config.width;
  let height = config.height;
  let rx = config.rx;
  let ry = config.ry;
  let fillColour = config.fillColour;
  let fillOpacity = config.fillOpacity;
  let stroke = config.stroke;
  let strokeOpacity = config.strokeOpacity;
  let strokeWidth = config.strokeWidth;
  let shadowColour = config.shadowColour;
  let shadowOpacity = config.shadowOpacity;
  let blurDeviation = config.blurDeviation;
  let xOffset = config.xOffset;
  let yOffset = config.yOffset;

  let timer = null;
  const blurHandler = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    getConfig({
      x,
      y,
      width,
      height,
      rx,
      ry,
      fillColour,
      fillOpacity,
      stroke,
      strokeOpacity,
      strokeWidth,
      shadowColour,
      shadowOpacity,
      blurDeviation,
      xOffset,
      yOffset
    });
  };
  const inputHandler = () => {
    console.log("what what");
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      getConfig({
        x,
        y,
        width,
        height,
        rx,
        ry,
        fillColour,
        fillOpacity,
        stroke,
        strokeOpacity,
        strokeWidth,
        shadowColour,
        shadowOpacity,
        blurDeviation,
        xOffset,
        yOffset
      });
    }, 1000);
  };

</script>

<div class="rect-configurator-component">
  <div class="heading first">
    Position:
  </div>
  <div class="section-wrapper">
    <div class="input-row">
      <div class="inputs">
        <NumberInput on:blur={blurHandler} on:input={inputHandler} bind:value={x} title="X-Position"
                     placeholder="0" />
      </div>
      <div class="inputs">
        <NumberInput on:blur={blurHandler} on:input={inputHandler} bind:value={y} title="Y-Position"
                     placeholder="0" />
      </div>
    </div>
  </div>
  <div class="heading">
    Size:
  </div>
  <div class="section-wrapper">
    <div class="input-row">
      <div class="inputs">
        <NumberInput on:blur={blurHandler} on:input={inputHandler} bind:value={width} title="Width"
                     placeholder="100" />
      </div>
      <div class="inputs">
        <NumberInput on:blur={blurHandler} on:input={inputHandler} bind:value={height} title="Height"
                     placeholder="100" />
      </div>
    </div>
  </div>
  <div class="heading">
    Radius:
  </div>
  <div class="section-wrapper">
    <div class="input-row">
      <div class="inputs">
        <NumberInput on:blur={blurHandler} on:input={inputHandler} bind:value={rx} title="X-Radius"
                     placeholder="100" />
      </div>
      <div class="inputs">
        <NumberInput on:blur={blurHandler} on:input={inputHandler} bind:value={ry} title="Y-Radius"
                     placeholder="100" />
      </div>
    </div>
  </div>
  <div class="heading">
    Fill:
  </div>
  <div class="section-wrapper">
    <div class="input-row">
      <div class="inputs color">
        <ColorInput id="fillColour" on:blur={blurHandler} on:input={inputHandler}
                    bind:value={fillColour} title="Colour" />
      </div>
      <div class="inputs opacity">
        <TextInput id="fillOpacity" on:blur={blurHandler} on:input={inputHandler}
                   bind:value={fillOpacity} title="Opacity" />
      </div>
    </div>
  </div>
  <div class="heading">
    Stroke:
  </div>
  <div class="section-wrapper">
    <div class="input-row">
      <div class="inputs color">
        <ColorInput id="strokeColour" on:blur={blurHandler} on:input={inputHandler}
                    bind:value={stroke} title="Colour" />
      </div>
      <div class="inputs opacity">
        <TextInput id="fillOpacity" on:blur={blurHandler} on:input={inputHandler}
                   bind:value={strokeOpacity} title="Opacity" />
      </div>

    </div>
    <div class="input-row">
      <div class="inputs full">
        <TextInput id="fillOpacity" on:blur={blurHandler} on:input={inputHandler}
                   bind:value={strokeWidth} title="Line Width" />
      </div>
    </div>
  </div>
  <div class="heading">
    Shadow:
  </div>
  <div class="section-wrapper">
    <div class="input-row">
      <div class="inputs">
        <NumberInput on:blur={blurHandler} on:input={inputHandler} bind:value={xOffset} title="X-Offset"
                     placeholder="100" />
      </div>
      <div class="inputs">
        <NumberInput on:blur={blurHandler} on:input={inputHandler} bind:value={yOffset} title="Y-Offset"
                     placeholder="100" />
      </div>
    </div>
    <div class="input-row">
      <div class="inputs color">
        <ColorInput id="strokeColour" on:blur={blurHandler} on:input={inputHandler}
                    bind:value={shadowColour} title="Colour" />
      </div>
      <div class="inputs opacity">
        <TextInput id="fillOpacity" on:blur={blurHandler} on:input={inputHandler}
                   bind:value={shadowOpacity} title="Opacity" />
      </div>

    </div>
    <div class="input-row">
      <div class="inputs full">
        <TextInput id="fillOpacity" on:blur={blurHandler} on:input={inputHandler}
                   bind:value={blurDeviation} title="Blur Deviation" />
      </div>
    </div>
  </div>
</div>

<style>
    .heading {
        font-weight: normal;
        font-size: 16px;
        background: #1E272C;
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        padding: 8px;
    }

    .heading.first {
        border-top: 0;
    }


    .section-wrapper {
        display: flex;
        flex-direction: column;
        padding: 8px 0;

    }

    .input-row {
        display: flex;
        flex-direction: row;
        margin: 8px 0;

    }

    .inputs.full {
        width: 100%;
    }

    .inputs {
        margin: 0 8px;
    }

    .color {
        width: 65%;
    }

    .opacity {
        width: 35%;
    }

</style>