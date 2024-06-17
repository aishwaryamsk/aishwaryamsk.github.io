<script>
  export let data;
</script>

<div class="row g-0">
  <div class="pt-1 name">Aishwarya Mudgal</div>
  <div class="col-sm-3 p-3">
    <img
      class="proj-img me-auto d-block"
      src={data.profileImgSrc}
      alt="profile"
    />
  </div>
  <div class="col-sm-9 p-3">
    <div>
      Hello there! I’m a front-end developer at Viavi Solutions, Inc. 
      I’m a recent graduate from Georgia Institute of Technology where I acquired a master’s in <span class="bold-txt">Computer Science</span> 
      with a specialization in <span class="bold-txt">Visual Analytics</span>. I enjoy working with data and design, 
      hence <span class="bold-txt">Visual Analytics</span> and <span class="bold-txt">Front-End Development</span> are my forte.
      <br />
      Feel free to reach out and get in touch!
    </div>

    <p />
    <span class="mr-2">
      <img
      class="social-media-icon"
      src={data.githubIcon}
        alt="GitHub Icon"
        height="22"
        width="22"
      />
      <a class="blue-link bold-txt m-auto" href={data.github} target="_blank">GitHub</a
      >
    </span>
    <span class="mr-2">
      <img
      class="social-media-icon"
      src={data.linkedIcon}
        alt="LinkedIn Icon"
        height="22"
        width="22"
      />
      <a class="blue-link bold-txt" href={data.linkedIn} target="_blank"
        >LinkedIn</a
      >
    </span>
    <span class="mr-2">
      <i class="bi bi-link-45deg link-icon" />
      <a class="blue-link bold-txt" href={data.resumeLink} target="_blank"
        >Resume</a
      >
    </span>
   <!--  <p />
      <span class="bold-txt">Email: </span>
      <img src={data.emailImgSrc} alt="email" /> -->
  </div>
</div>
