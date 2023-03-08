<script>
  import Router from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";

  const routes = {
    "/covid19_7450": wrap({
      asyncComponent: () => import("./routes/ProjectDesc.svelte"),
    }),

    "/mostCommonObjsInPaintings": wrap({
      asyncComponent: () => import("./routes/ProjectDesc.svelte"),
    }),

    "/multiTouchGrahingTool": wrap({
      asyncComponent: () => import("./routes/ProjectDesc.svelte"),
    }),

    "/ethnicitiesInGrammys": wrap({
      asyncComponent: () => import("./routes/ProjectDesc.svelte"),
    }),

    "/vast2022": wrap({
      asyncComponent: () => import("./routes/ProjectDesc.svelte"),
    }),

    "/covid19sentiments": wrap({
      asyncComponent: () => import("./routes/ProjectDesc.svelte"),
    }),

    "/about": wrap({
      asyncComponent: () => import("./routes/About.svelte"),
    }),

    "/": wrap({
      asyncComponent: () => import("./routes/Home.svelte"),
    }),
  };
</script>

<svelte:head>
  <!-- Icons -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
  />
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Aboreto&family=Bilbo+Swash+Caps&family=Nunito:wght@600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Router {routes} />
