<script>
  import {link} from 'svelte-spa-router';
  export let cardTitle;
  export let coverImg;
  export let projectName;
  export let shortDesc;
  export let tools;
</script>

<a class='card card-link' href={projectName} target='_blank' use:link>
  <img
    class='card-img-top proj-img ms-auto d-block'
    src={coverImg}
    alt='project cover'
  />
  <div class='card-body'>
    <div class='card-title'>{cardTitle}</div>
    <p class='card-text'>{shortDesc}</p>
    <div>
      <span class="card-text clearfix">
        {#each tools as item}
          <span class="card-tools brief-one-line-list">{item}</span>
        {/each}
      </span>
    </div>
  </div>
</a> 
