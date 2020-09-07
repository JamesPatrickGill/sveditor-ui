<script>
  import { editorMode } from "../../modules/stores/stores";

  let selected = "editor";
  const changeSelection = (selection) => {
    selected = selection;
  };

  let mode = $editorMode;

  const changeMode = (e) => {
    editorMode.update(_ => e.target.value);
  };
</script>

<div class="header">
  <div class="mode {selected === 'editor' ? 'selected' : ''}" on:click={() => changeSelection('editor')}>
    Mode: <select class="select" bind:value={mode} on:change="{changeMode}">
    <option class="select-option" value="editing">Editing</option>
    <option class="select-option" value="previewing">Previewing</option>
  </select>
  </div>

</div>

<style>
    .header {
        background: #2E3C43;
        flex-direction: row;
        align-items: center;
        font-size: 20px;
        display: flex;
        border-bottom: 2px solid black;
        width: 100%;
    }

    .mode {
        color: #a2a2a4;
        padding: 16px;
        margin: 0;
        background: none;
        letter-spacing: 0.5px;
        border: 0;
        border-radius: 0;
        width: fit-content;
        font-size: 20px;
        outline: 0;

    }

    .select {
        background: none;
        border: none;
        color: #00eeee;
        font-size: 20px;
        cursor: pointer;
    }

    .select:hover {
        text-decoration: underline;
        background: #465b66;
    }

    .select:focus {
        outline: 0;
    }

    .select:active {
        outline: 0;
    }

    .select-option:hover {
        text-decoration: underline;
    }


</style>