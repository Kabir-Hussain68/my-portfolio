<script>
  import { base } from '$app/paths';
  import { links } from '$lib/links';
  import { featuredPosts as featured, recentPosts as recent, fmt, link, thumb } from '$lib/posts';
</script>

<svelte:head>
  <title>Kabir Hussain · Graphics Programmer</title>
  <meta name="description" content="Kabir Hussain, a graphics programmer trying to make pixels beautiful." />
</svelte:head>

<div class="wrap">
  <section class="view on" id="v-home">
  <div class="hero">
    <div>
      <div class="av" style="background-image:url({base}/assets/john.jpg)"></div>
      <h1>Kabir Hussain</h1>
      <div class="row"><svg class="i"><use href="#job"/></svg><span>Software Engineering Student</span></div>
      <div class="row"><svg class="i"><use href="#pin"/></svg><span>Hyderabad <em>&amp; Remote</em></span></div>
      <div class="soc"><a href={links.linkedin} target="_blank" rel="noopener noreferrer">in</a><a href={links.github} target="_blank" rel="noopener noreferrer">GH</a></div>
    </div>
    <div class="bio">
      <p>I’m a <b>software engineering student</b> at MUET, just trying to make pixels on the screen beautiful.</p>
      <p>I enjoy <em>game development</em>, <em>graphics</em>, maths and studying <em>breakdowns of games</em>.</p>
    </div>
  </div>

  
    <h2 style="margin-left:20px">✦ Featured Work</h2>
    <div class="feat">
      {#each featured as p (p.slug)}
        <a class="it" href={link(p)}>
          <div class="th" style={thumb(p)}></div>
          <div>
            <h3>{p.title}</h3>
            <div class="m"><svg class="i"><use href="#cal" /></svg> {fmt(p.date)}</div>
            <p>{p.excerpt}</p>
            <div class="rm">Read More…</div>
          </div>
        </a>
      {/each}
    </div>

    <h2 style="margin-left:10px"><svg class="i"><use href="#bell" /></svg> Recently Updated</h2>
    <div class="ru" style="margin-left:10px">
      {#each recent as p (p.slug)}
        <a href={link(p)}><b>{p.title}</b> · {fmt(p.updated)}</a>
      {/each}
    </div>
  </section>
</div>
