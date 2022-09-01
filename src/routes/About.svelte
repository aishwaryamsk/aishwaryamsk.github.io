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
      Hello there! I’m a second-year master’s student in
      <span class="bold-txt">Computer Science</span> specializing in
      <span class="bold-txt">Visual Analytics</span> at the Georgia Institute of
      Technology. I’m interested in data visualization and visual analytics. I
      currently work with
      <a class="proj-link" href={data.endertLink} target="_blank"
        >Dr. Alex Endert</a
      >
      on visualization recommendation systems for mobile devices. I’m also a Graduate
      Teaching Assistant to
      <a class="proj-link" href={data.andrisLink} target="_blank"
        >Dr. Clio Andris</a
      >
      for the course CS 4460-Intro to Information Visualization.
      <br />
      I graduate in May 2023 and I’m open to full-time roles in visual analytics.
      Feel free to reach out and get in touch!
    </div>

    <p />
    <div>
      <span class="bold-txt">Email: </span>
      <img src={data.emailImgSrc} alt="email" />
    </div>
    <div>
      <i class="bi bi-link-45deg link-icon" />
      <a class="proj-link bold-txt" href={data.resumeLink} target="_blank"
        >Resume</a
      >
    </div>
  </div>
</div>
