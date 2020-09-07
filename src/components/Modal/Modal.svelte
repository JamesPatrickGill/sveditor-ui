<script>
  import { onMount } from "svelte";

  let componentInstance;
  onMount(() => {
    document.body.appendChild(componentInstance);
  });
</script>

<div class="modal" bind:this={componentInstance}>
  <slot />
</div>

<style>
    .modal {
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -25%);
        border: 1px solid black;
        padding: 16px;
        min-width: 600px;
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12);
        background: #2E3C43;

    }
</style>