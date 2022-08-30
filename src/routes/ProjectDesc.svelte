<script>
  export let project;
</script>

<div class='row g-0'>
  <div class='proj-title text-center py-5'>{project.title}</div>
  <div class='col-sm-5 pb-3'>
    <img
      class='proj-img me-auto d-block'
      src={project.imgSrc}
      alt='project cover'
    />
  </div>
  <div class='col-sm-7 p-1'>
    <p class='break-line'>{project.longDescription}</p>
    <p>
      <span class='bold-txt'>Source: </span>
      {project.source}
    </p>
    <div>
      <span class='bold-txt '>Tools: </span>
    </div>
    <ul class='clearfix'>
      {#each project.languages as item}
        <li class='one-line-list'>{item}</li>
      {/each}
    </ul>
    <p>
      {#if project.refDataset}
        <span class='p-1'>
          <i class='bi bi-link-45deg link-icon' />
          <a class='proj-link bold-txt' href={project.refDataset} target='_blank'>Reference Dataset</a>
        </span>
      {/if}
      {#if project.challengeLink}
        <span class='p-1'>
          <i class='bi bi-link-45deg link-icon' />
          <a class='proj-link bold-txt' href={project.challengeLink} target='_blank'>Challenge</a>
        </span>
      {/if}
      {#if project.github}
        <span class='p-1'>
          <i class='bi bi-link-45deg link-icon' />
          <a class='proj-link bold-txt' href={project.github} target='_blank'>GitHub</a>
        </span>
      {/if}
      <span class='p-1'>
        <i class='bi bi-link-45deg link-icon' />
        <a class='proj-link bold-txt' href={project.demoLink} target='_blank'>Demo</a>
      </span>
    </p>
  </div>
</div>
