<script>
  import Router from 'svelte-spa-router';
  import {wrap} from 'svelte-spa-router/wrap';
  
  const routes = {
    '/mostCommonObjsInPaintings': wrap({
        asyncComponent: () => import('./routes/ProjectDesc.svelte')
    }),

    '/ethnicitiesInGrammys': wrap({
        asyncComponent: () => import('./routes/ProjectDesc.svelte')
    }),

    '/vast2022': wrap({
        asyncComponent: () => import('./routes/ProjectDesc.svelte')
    }),

    '/covid19sentiments': wrap({
        asyncComponent: () => import('./routes/ProjectDesc.svelte')
    }),

    '*': wrap({
        asyncComponent: () => import('./routes/Home.svelte')
    })
}
</script>

<svelte:head>
  <!-- Icons -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
  />
  <!-- Font -->
  <link
    href="https://fonts.googleapis.com/css?family=Bilbo Swash Caps|Nunito"
    rel="stylesheet"
    type="text/css"
  />
</svelte:head>

<Router {routes}/>