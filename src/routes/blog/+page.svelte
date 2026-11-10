<script>
  import { posts, fmt, link, cover } from '$lib/posts';
  const blogs = posts.filter((p) => p.type === 'Blog');
</script>

<svelte:head><title>Blog · Kabir Hussain</title></svelte:head>

<div class="wrap">
  <section class="view on" id="v-blog">
    <div class="blog">
      {#each blogs as p (p.slug)}
        <a class="bc" href={link(p)}>
          <div class="bi" style={cover(p)}></div>
          <h3>{p.title}</h3>
          <div class="by"><svg class="i"><use href="#cal" /></svg> {fmt(p.date)}</div>
          <p>{p.excerpt}</p>
        </a>
      {/each}
    </div>
  </section>
</div>
