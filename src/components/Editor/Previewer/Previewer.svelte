<script>
  import Prism from "svelte-prism";

  import { layers } from "../../../modules/stores/stores";

  let snippet;
  $: snippet = `<img src="https://sveditor-api.vercel.app/api/?options=${encodeURIComponent(JSON.stringify($layers))}" />`;
</script>

<div class="previewing">
  <div class="previewing-content"><h2>Well done on creating your Github friendly SVG.</h2>
    <h4>Your SVG can be found <a
      href="https://sveditor-api.vercel.app/api/?options={encodeURIComponent(JSON.stringify($layers))}">here</a>,
      however we do have a few quality of life suggestions as to how
      to consume your asset below: </h4>
    <ol>
      <li class="suggestion-list">
        Copy and paste the following img tag directly inside a Github markdown file such as a profile readme for
        example:
        <br>
        <Prism language="html" source="{snippet}" />
      </li>
    </ol>
  </div>
</div>

<style>
    .previewing {
        width: 40%;
        color: #333333;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        border-right: 1px solid #999999;
    }

    .previewing {
        color: #333333;
        margin: 48px;
        text-align: left;
        padding: 32px;
    }

    .suggestion-list {
        list-style-type: lower-roman;
    }
</style>
