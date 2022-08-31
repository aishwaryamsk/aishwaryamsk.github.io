<script>
  import {location} from 'svelte-spa-router'
  import projectsRef from "../projectsRef.json";
  let loc = $location.replace(/\//g, "");
</script>

<div class='row g-0'>
  <div class='proj-title text-center py-5'>{projectsRef[loc].title}</div>
  <div class='col-sm-5 pb-3'>
    <img
      class='proj-img me-auto d-block'
      src={projectsRef[loc].imgSrc}
      alt='project cover'
    />
  </div>
  <div class='col-sm-7 p-1'>
    <p class='break-line'>{projectsRef[loc].longDescription}</p>
    <p>
      <span class='bold-txt'>Source: </span>
      {projectsRef[loc].source}
    </p>
    <div>
      <span class='bold-txt '>Tools: </span>
    </div>
    <ul class='clearfix'>
      {#each projectsRef[loc].languages as item}
        <li class='one-line-list'>{item}</li>
      {/each}
    </ul>
    <p>
      {#if projectsRef[loc].refDataset}
        <span class='p-1'>
          <i class='bi bi-link-45deg link-icon' />
          <a class='proj-link bold-txt' href={projectsRef[loc].refDataset} target='_blank'>Reference Dataset</a>
        </span>
      {/if}
      {#if projectsRef[loc].challengeLink}
        <span class='p-1'>
          <i class='bi bi-link-45deg link-icon' />
          <a class='proj-link bold-txt' href={projectsRef[loc].challengeLink} target='_blank'>Challenge</a>
        </span>
      {/if}
      {#if projectsRef[loc].github}
        <span class='p-1'>
          <i class='bi bi-link-45deg link-icon' />
          <a class='proj-link bold-txt' href={projectsRef[loc].github} target='_blank'>GitHub</a>
        </span>
      {/if}
      <span class='p-1'>
        <i class='bi bi-link-45deg link-icon' />
        <a class='proj-link bold-txt' href={projectsRef[loc].demoLink} target='_blank'>Demo</a>
      </span>
    </p>
  </div>
</div>
