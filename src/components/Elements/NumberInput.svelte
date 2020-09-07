<script>
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
    <input use:events bind:value={value} class="input" type='number' placeholder={placeholder} />
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
        background: #1E272C;
        padding: 8px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .wrapper:focus-within {
        border-bottom: 2px solid #00eeee;
        padding-bottom: 6px;

    }

    .input {
        width: 100%;
        background: transparent;
        font-size: 14px;
        border: 0;
        color: #eceef0;
    }

    .input:focus {
        outline: none;
    }


</style>
