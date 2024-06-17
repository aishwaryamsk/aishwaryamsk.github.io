<script>
  import { location } from "svelte-spa-router";
  import projectsRef from "../projectsRef.json";
  let loc = $location.replace(/\//g, "");
</script>

<div class="row g-0">
  <div class="proj-title text-center pt-5 pb-3">
    {projectsRef.projects[loc].title}
  </div>
  <div class="col-sm-5 p-3">
    <!-- <img
      class="proj-img me-auto d-block"
      src={projectsRef.projects[loc].imgSrc}
      alt="project cover"
    /> -->

    <a href={projectsRef.projects[loc].demoLink} target="_blank">
      <img
        class="proj-img me-auto d-block"
        src={projectsRef.projects[loc].imgSrc}
        alt="project cover"
      />
    </a>

    <p>
      <span class="p-1">
        <i class="bi bi-link-45deg link-icon" />
        <a
          class="blue-link bold-txt"
          href={projectsRef.projects[loc].demoLink}
          target="_blank">Demo</a
        >
      </span>
      {#if projectsRef.projects[loc].github}
        <span class="p-1">
          <i class="bi bi-link-45deg link-icon" />
          <a
            class="blue-link bold-txt"
            href={projectsRef.projects[loc].github}
            target="_blank">GitHub</a
          >
        </span>
      {/if}
      {#if projectsRef.projects[loc].challengeLink}
        <span class="p-1">
          <i class="bi bi-link-45deg link-icon" />
          <a
            class="blue-link bold-txt"
            href={projectsRef.projects[loc].challengeLink}
            target="_blank">Challenge</a
          >
        </span>
      {/if}
      {#if projectsRef.projects[loc].refDataset}
        <span class="p-1">
          <i class="bi bi-link-45deg link-icon" />
          <a
            class="blue-link bold-txt"
            href={projectsRef.projects[loc].refDataset}
            target="_blank">Reference Dataset</a
          >
        </span>
      {/if}
    </p>
    <div class="bold-txt">Tools:</div>
    <p>
      {#each projectsRef.projects[loc].languages as item}
        <span class="proj-tools brief-one-line-list">{item}</span>
      {/each}
    </p>
  </div>

  <div class="col-sm-7 p-3">
    <p class="break-line">{@html projectsRef.projects[loc].longDescription}</p>
    {#if projectsRef.projects[loc].sourceLink}
      <span class="bold-txt">Data Source: </span>
      <a
        class="blue-link"
        href={projectsRef.projects[loc].sourceLink}
        target="_blank">{projectsRef.projects[loc].source}</a
      >
    {:else}
      <span class="bold-txt"
        >Data Source:
        {projectsRef.projects[loc].source}</span
      >
    {/if}
  </div>
</div>
