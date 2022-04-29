<script lang="ts">
  //  css
  import "../styles/normalize.css";
  import "../styles/main.css";
  import "../styles/style.css"

  import { appConfig } from "$lib/appConfig";
  import Header from "$lib/components/elements/Header.svelte";
  import { createClient, setClient } from "@urql/svelte";

  const client = createClient({
    url: $appConfig.skdGraphqlURI,
  });

  setClient(client);
</script>

<Header>{$appConfig.appTitle}</Header>
<slot />
