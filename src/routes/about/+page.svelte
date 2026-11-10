<script>
  import { base } from '$app/paths';
  import { references } from '$lib/references';
  import { links } from '$lib/links';
  import { inspirations } from '$lib/inspirations';
</script>

<svelte:head><title>About · Kabir Hussain</title></svelte:head>

<div class="wrap">
  <section class="view on" id="v-about">
  <div class="ab"><h1>About</h1>
    <div class="av" style="background-image:url({base}/assets/john.jpg)"></div>
    <p>I’m <b>Kabir Hussain</b>, a software engineering student at MUET. I’m particularly interested in graphics: how the pixels on a computer screen are produced, and which techniques are used to produce them.</p>
    <p>I have a good understanding of how graphics work and how pixels are presented on screen. My interests lie mainly in presenting those pixels through post-processing effects and optimizing them further. I’m passionate about computer graphics and have been writing blog posts on the subject, from studies of a game’s rendering pipeline to how a post-processing effect comes to be.</p>
    <p>Throughout my life I have been trying to understand every aspect of computer graphics, and I have only scratched the surface. I will always remain a student. I believe in being humbly curious and in welcoming critique when I get something wrong.</p>
    <p>You can view most of the projects mentioned in the blogs, and some other work aswell, on my <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>.
    Want to contact me? Email me at <a href="mailto:kabirsoomro529@gmail.com">kabirsoomro529@gmail.com</a>.</p>
    <div class="ctr"><a href={links.linkedin} target="_blank" rel="noopener noreferrer">in</a><a href={links.github} target="_blank" rel="noopener noreferrer">GH</a></div>
  </div>

  <div class="cols">
    <div><h2>Work</h2>
      <div class="job"><div class="lg"><svg width="44" height="44" viewBox="0 0 24 24"><use href="#job"/></svg></div><div><h3>Uemployed</h3><div class="m"><svg class="i"><use href="#job"/></svg>Any job works<br><svg class="i"><use href="#cal"/></svg>2026 - Present<br><svg class="i"><use href="#pin"/></svg>Any  · Remote</div></div></div>
      <h2>Education</h2>
      <div class="job"><div class="lg"><svg width="84" height="34" viewBox="0 0 170 68" aria-label="MUET"><g font-family="Graduate,Georgia,serif" font-size="46" text-anchor="middle"><text x="85" y="52" fill="currentColor" stroke="currentColor" stroke-width="7" stroke-linejoin="round">MUET</text><text x="85" y="52" fill="var(--bg)" stroke="var(--bg)" stroke-width="3.6" stroke-linejoin="round">MUET</text><text x="85" y="52" fill="none" stroke="currentColor" stroke-width="1.5">MUET</text></g></svg></div><div><h3>BE Software Engineering</h3><div class="m"><svg class="i"><use href="#job"/></svg>MUET<br><svg class="i"><use href="#cal"/></svg>2024 - Present · <em>currently enrolled</em><br><svg class="i"><use href="#pin"/></svg>Jamshoro, Pakistan</div></div></div>
    </div>
    <div><h2>Interests</h2>
      <div class="job"><div class="lg"><svg width="48" height="48" viewBox="0 0 48 48" aria-label="Shader Programming"><circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" stroke-width="3.2"/><path d="M24 6a18 18 0 0 1 0 36 11 18 0 0 0 0-36z" fill="currentColor"/></svg></div><div><h3>Shader Programming</h3><div class="m">PBR, lighting, shadows</div></div></div>
      <div class="job"><div class="lg"><svg width="48" height="48" viewBox="0 0 48 48" aria-label="Post Processing"><rect x="5" y="9" width="38" height="30" rx="3" fill="none" stroke="currentColor" stroke-width="3.2"/><circle cx="16" cy="19" r="3.5" fill="currentColor"/><path d="M8 35l11-11 7 7 6-6 8 8" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linejoin="round" stroke-linecap="round"/></svg></div><div><h3>Post Processing</h3><div class="m">Making pixels beautiful</div></div></div>
      <div class="job"><div class="lg"><svg width="46" height="46" viewBox="0 0 48 48" aria-label="Engine Programming"><path d="M24 3 42 13.5v21L24 45 6 34.5v-21z" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linejoin="round"/><path d="M24 24v21M24 24 6 13.5M24 24l18-10.5" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linejoin="round"/></svg></div><div><h3>Engine Programming</h3><div class="m">I think this works</div></div></div>
    </div>
  </div>

  <div class="ab" style="max-width:880px">
    <h2>Inspirations</h2>
    <p>A <b>lot of individuals</b> from <em>friends to engineers and developers</em> inspire me, only a few mentioned in no particular order: {#each inspirations as p, i}<a href={p.url} target="_blank" rel="noopener noreferrer">{p.name}</a>{i < inspirations.length - 1 ? ', ' : ''}{/each}.</p>
    <h2>Favorite References</h2><p>In no particular order:</p>
    <div class="ref">
      {#each references as r}
        <div><a href={r.url} target="_blank" rel="noopener noreferrer">{r.title}</a>By {r.by}</div>
      {/each}
    </div>
  </div>
</section>
</div>
