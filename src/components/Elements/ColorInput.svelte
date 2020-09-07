<script>
  import TextInput from "./TextInput.svelte";

  export let placeholder;
  export let value;
  export let title;
  export let type = "";

  import { getEventsAction } from "../../modules/utils/getEvents";
  import { current_component } from "svelte/internal";

  const events = getEventsAction(current_component);
</script>

<div>
  {#if title}
    <div class="title">{title}</div>
  {/if}
  <div class="wrapper">
    <input use:events bind:value={value} class="input" type='color' placeholder={placeholder} />
    <TextInput on:blur on:input bind:value={value} />
  </div>
</div>


<style>
    .title {
        font-size: 12px;
        padding-left: 8px;
        padding-bottom: 4px;
        color: #dcdde0;
    }

    .wrapper {
        display: flex;
        flex-direction: row;
        height: 35px;
    }


    .input {
        background: none;
        border: 0;
        padding: 0;
        height: 100%;
        width: 35px;
        cursor: pointer;
    }

    .input::-webkit-color-swatch-wrapper {
        border: 0;
        padding: 0;

    }

    .input::-webkit-color-swatch {
        border: 0;
        height: 35px;
        width: 35px;
    }


    .input::-moz-color-swatch {
        border: 0;
        height: 35px;
        width: 35px;
    }

    .input:focus {
        outline: none;
    }
</style>
