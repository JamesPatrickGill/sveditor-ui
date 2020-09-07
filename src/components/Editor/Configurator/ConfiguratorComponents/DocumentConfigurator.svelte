<script>
  import { configs } from "../../../../modules/layerDefaults/layerConfigs";
  import NumberInput from "../../../Elements/NumberInput.svelte";

  export let getConfig;
  export let config;

  let width = config.width;
  let height = config.height;
  let newConfig = configs.Rectangle;

  $: newConfig = {
    width,
    height
  };

  let timer = null;
  const blurHandler = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    getConfig(newConfig);
  };
  const inputHandler = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      getConfig(newConfig);
    }, 1000);
  };

</script>

<div>
  <div class="heading first">
    Size:
  </div>
  <div class="section-wrapper">
    <div class="input-row">
      <div class="inputs">
        <NumberInput on:blur={blurHandler} on:input={inputHandler} bind:value={width} title="Width"
                     placeholder="0" />
      </div>
      <div class="inputs">
        <NumberInput on:blur={blurHandler} on:input={inputHandler} bind:value={height} title="Height"
                     placeholder="0" />
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


    .input-row {
        display: flex;
        flex-direction: row;
        margin: 8px 0;

    }

    .section-wrapper {
        display: flex;
        flex-direction: column;
        padding: 8px 0;
    }

    .inputs {
        margin: 0 8px;
    }
</style>