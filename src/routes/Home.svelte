<script>
  import ProjectCard from "./ProjectCard.svelte";
  export let projects;
</script>

<div class="d-flex flex-column">
  <div class="title text-center py-3">Projects</div>

  <div class="content-body d-flex justify-content-center my-sm-3">
    <div class="project pe-sm-4">
      <ProjectCard
        projectName={"mostCommonObjsInPaintings"}
        cardTitle={projects.mostCommonObjsInPaintings.title}
        coverImg={projects.mostCommonObjsInPaintings.imgSrc}
        shortDesc={projects.mostCommonObjsInPaintings.shortDescription}
      />
    </div>
    <div class="project ps-sm-4">
      <ProjectCard
        projectName={"ethnicitiesInGrammys"}
        cardTitle={projects.ethnicitiesInGrammys.title}
        coverImg={projects.ethnicitiesInGrammys.imgSrc}
        shortDesc={projects.ethnicitiesInGrammys.shortDescription}
      />
    </div>
  </div>

  <div class="content-body d-flex justify-content-center my-sm-3">
    <div class="project pe-sm-4">
      <ProjectCard
        projectName={"vast2022"}
        cardTitle={projects.vast2022.title}
        coverImg={projects.vast2022.imgSrc}
        shortDesc={projects.vast2022.shortDescription}
      />
    </div>
    <div class="project ps-sm-4">
      <ProjectCard
        projectName={"covid19sentiments"}
        cardTitle={projects.covid19sentiments.title}
        coverImg={projects.covid19sentiments.imgSrc}
        shortDesc={projects.covid19sentiments.shortDescription}
      />
    </div>
  </div>
</div>
