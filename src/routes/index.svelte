<script lang="ts">
  import type {
    ComponentsQuery,
    ComponentsQueryVariables,
    ProductionStationsQuery,
    ProductionStationsQueryVariables,
  } from "$lib/generated/graphql";
  import { COMPONENTS } from "$lib/graphql/components";
  import { PRODUCTION_STATIONS } from "$lib/graphql/productionStations";

  import { operationStore, query } from "@urql/svelte";

  const components = operationStore<ComponentsQuery, ComponentsQueryVariables>(COMPONENTS, {});

  const stations = operationStore<ProductionStationsQuery, ProductionStationsQueryVariables>(PRODUCTION_STATIONS, {});
  query(components);
  query(stations);

  $: {
    $stations.reexecute();
  }
</script>

<h1>Home</h1>

<h2>Components</h2>

{#if $components.data}
  {JSON.stringify($components.data, null, 2)}
{/if}

<h2>Components</h2>

{#if $stations.fetching}
  <div>loading stations...</div>
{:else if $stations.data}
  {JSON.stringify($stations.data, null, 2)}
{/if}
