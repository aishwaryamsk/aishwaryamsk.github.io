<script>
  import {link} from 'svelte-spa-router'
  export let cardTitle;
  export let coverImg;
  export let projectName;
  export let shortDesc;
</script>

<a class="card card-link" href={projectName} target="_blank" use:link>
  <img
    class="card-img-top proj-img ms-auto d-block"
    src={coverImg}
    alt="project cover"
  />
  <div class="card-body">
    <div class="card-title">{cardTitle}</div>
    <p class="card-text">{shortDesc}</p>
  </div>
</a> 
