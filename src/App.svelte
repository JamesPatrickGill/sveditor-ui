<script>
  import Header from "./components/Header/Header.svelte";
  import Editor from "./components/Editor/Editor.svelte";
</script>

<svelte:head>
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism-tomorrow.min.css'>
</svelte:head>


<main>
  <Header />
  <Editor />
</main>

<style>
    main {
        text-align: center;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #d7d7d7;
    }
</style>