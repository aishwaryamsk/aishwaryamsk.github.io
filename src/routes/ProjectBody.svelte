<script>
  import ProjectCard from "./ProjectCard.svelte";
  export let projects;
</script>

<div class="content-body d-flex justify-content-center my-sm-3">
  <div class="project pe-sm-4">
    <ProjectCard
      projectName={"/mostCommonObjsInPaintings"}
      cardTitle={projects.mostCommonObjsInPaintings.title}
      coverImg={projects.mostCommonObjsInPaintings.imgSrc}
      shortDesc={projects.mostCommonObjsInPaintings.shortDescription}
      tools={projects.mostCommonObjsInPaintings.languages}
    />
  </div>
  <div class="project ps-sm-4">
    <ProjectCard
      projectName={"/multiTouchGrahingTool"}
      cardTitle={projects.multiTouchGrahingTool.title}
      coverImg={projects.multiTouchGrahingTool.imgSrc}
      shortDesc={projects.multiTouchGrahingTool.shortDescription}
      tools={projects.multiTouchGrahingTool.languages}
    />
  </div>
</div>

<div class="content-body d-flex justify-content-center my-sm-3">
  <div class="project pe-sm-4">
    <ProjectCard
      projectName={"/vast2022"}
      cardTitle={projects.vast2022.title}
      coverImg={projects.vast2022.imgSrc}
      shortDesc={projects.vast2022.shortDescription}
      tools={projects.vast2022.languages}
    />
  </div>
  <div class="project ps-sm-4">
    <ProjectCard
      projectName={"/ethnicitiesInGrammys"}
      cardTitle={projects.ethnicitiesInGrammys.title}
      coverImg={projects.ethnicitiesInGrammys.imgSrc}
      shortDesc={projects.ethnicitiesInGrammys.shortDescription}
      tools={projects.ethnicitiesInGrammys.languages}
    />
  </div>
</div>

<div class="content-body d-flex justify-content-center my-sm-3">
  <div class="project pe-sm-4">
    <ProjectCard
      projectName={"/covid19sentiments"}
      cardTitle={projects.covid19sentiments.title}
      coverImg={projects.covid19sentiments.imgSrc}
      shortDesc={projects.covid19sentiments.shortDescription}
      tools={projects.covid19sentiments.languages}
    />
  </div>
</div>
