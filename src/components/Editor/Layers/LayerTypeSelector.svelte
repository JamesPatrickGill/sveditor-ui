<script>
  import Rectangle from "../../Icons/Rectangle.svelte";
  import Circle from "../../Icons/Circle.svelte";

  export let getType;

  let selected;

  $: getType(selected);

  const typeOptions = [
    { type: "Rectangle" },
    { type: "Circle" }
  ];

  const icons = {
    Rectangle: {
      icon: Rectangle, props: {
        width: "40%"
      }
    },
    Circle: {
      icon: Circle, props: {
        width: "45%"
      }
    }
  };

</script>

<div class="selectors-wrapper">
  {#each typeOptions as option}
    <button class="selector {selected === option.type ? 'selected' : ''}" on:click={() => {selected = option.type}}>
            <span class="button-text">
                {option.type}
            </span>
    </button>
  {/each}
</div>

<style>
    .selectors-wrapper {
        display: flex;
        margin: 0 -4px;
    }

    .selector {
        width: 20%;
        padding: 8px;
        font-size: 14px;
        background: #1E272C;
        color: #eceef0;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border: 2px solid transparent;
        margin: 0 4px;
        outline: 0;
    }

    .selector:focus {
        text-decoration: underline;
        background: #252f35;
        border: 2px solid #00eeee;
    }

    .selector:hover {
        text-decoration: underline;
        background: #252f35;
    }

    .selector:active {
        background: #58616e;
    }

    .selected {
        border-bottom: 2px solid #00eeee;
    }

</style>