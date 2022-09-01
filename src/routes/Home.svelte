<script>
  import ProjectBody from './ProjectBody.svelte';
  import About from './About.svelte';
  import projectsRef from '../projectsRef.json';

  let showProjects = true;
  let showAbout = false;

  function navigateMenuItem(event) {
    let divs = document.querySelectorAll('#menu div');
    for (let i = 0; i < divs.length; i++) {
      divs[i].classList.remove('underscore');
    }
    let id = event.target.id;
    document.getElementById(id).classList.add('underscore');

    showProjects = showAbout = false;
    if (id == 'projectsMenu') showProjects = true 
    else showAbout = true;
  }
</script>

<div class='d-flex flex-column'>
  <div id='menu' class='d-flex justify-content-center title py-3'>
    <div id='projectsMenu' class='underscore px-4' on:click={navigateMenuItem}>
      Projects
    </div>
    <div id='aboutMenu' class='px-4' on:click={navigateMenuItem}>About</div>
  </div>

  {#if showProjects}
    <ProjectBody projects={projectsRef.projects}/>
  {/if}
  {#if showAbout}
    <About data={projectsRef.about}/>
  {/if}
</div>
