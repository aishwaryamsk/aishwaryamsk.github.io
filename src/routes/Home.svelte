<script>
  import ProjectCard from "./ProjectCard.svelte";
  import projectsRef from "../projectsRef.json";
</script>

<div class="d-flex flex-column">
  <div class="title text-center py-3">Projects</div>

  <div class="content-body d-flex justify-content-center my-sm-3">
    <div class="project pe-sm-4">
      <ProjectCard
        projectName={"/mostCommonObjsInPaintings"}
        cardTitle={projectsRef.mostCommonObjsInPaintings.title}
        coverImg={projectsRef.mostCommonObjsInPaintings.imgSrc}
        shortDesc={projectsRef.mostCommonObjsInPaintings.shortDescription}
      />
    </div>
    <div class="project ps-sm-4">
      <ProjectCard
        projectName={"/ethnicitiesInGrammys"}
        cardTitle={projectsRef.ethnicitiesInGrammys.title}
        coverImg={projectsRef.ethnicitiesInGrammys.imgSrc}
        shortDesc={projectsRef.ethnicitiesInGrammys.shortDescription}
      />
    </div>
  </div>

  <div class="content-body d-flex justify-content-center my-sm-3">
    <div class="project pe-sm-4">
      <ProjectCard
        projectName={"/vast2022"}
        cardTitle={projectsRef.vast2022.title}
        coverImg={projectsRef.vast2022.imgSrc}
        shortDesc={projectsRef.vast2022.shortDescription}
      />
    </div>
    <div class="project ps-sm-4">
      <ProjectCard
        projectName={"/covid19sentiments"}
        cardTitle={projectsRef.covid19sentiments.title}
        coverImg={projectsRef.covid19sentiments.imgSrc}
        shortDesc={projectsRef.covid19sentiments.shortDescription}
      />
    </div>
  </div>
</div>
