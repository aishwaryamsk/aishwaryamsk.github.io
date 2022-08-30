<script>
  import { Router, Route } from "svelte-navigator";
  import Home from "./routes/Home.svelte";
  import ProjectDesc from "./routes/ProjectDesc.svelte";
  import projectsRef from "./projectsRef.json";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
    crossorigin="anonymous"
  />
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

<Router primary={false}>
  <Route path="">
    <Home projects={projectsRef} />
  </Route>

  <Route path="/vast2022">
    <ProjectDesc project={projectsRef.vast2022} />
  </Route>

  <Route path="/mostCommonObjsInPaintings">
    <ProjectDesc project={projectsRef.mostCommonObjsInPaintings} />
  </Route>

  <Route path="/covid19sentiments">
    <ProjectDesc project={projectsRef.covid19sentiments} />
  </Route>

  <Route path="/ethnicitiesInGrammys">
    <ProjectDesc project={projectsRef.ethnicitiesInGrammys} />
  </Route>
</Router>
