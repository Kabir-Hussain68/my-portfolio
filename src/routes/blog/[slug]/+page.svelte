<script>
  import { onMount } from 'svelte';
  import { fmt, asset } from '$lib/posts';

  export let data;
  $: p = data.post;
  let cur = '';

  onMount(() => {
    const spy = () => {
      let c = '';
      document.querySelectorAll('.post h2, .post h3').forEach((e) => {
        if (e.getBoundingClientRect().top < 150) c = e.id;
      });
      cur = c;
    };
    addEventListener('scroll', spy);
    spy();
    return () => removeEventListener('scroll', spy);
  });
</script>

<svelte:head>
  <title>{p.title} · Kabir Hussain</title>
  <meta name="description" content={p.excerpt} />
</svelte:head>

<section class="view on" id="v-post">
  <div
    class="ph"
    style={p.image ? `background-image:linear-gradient(rgba(15,20,25,0),var(--bg) 97%),url("${asset(p.image)}")` : ''}
  >
    <div class="phi">
      <h1 class:sr={p.titled}>{p.title}</h1>
      <div class="pby"><svg class="i"><use href="#cal" /></svg> <span>{fmt(p.date)}</span></div>
      <p class="pex">{p.excerpt}</p>
    </div>
  </div>
  <div class="pl">
    <article class="post">{@html p.html}</article>
    <aside class="toc">
      <h4>Contents</h4>
      {#each p.toc as t}
        <a class={'h' + t.level} class:on={cur === t.id} href={'#' + t.id}>{t.text}</a>
      {/each}
    </aside>
  </div>
</section>

<style>

  .ph {
    position: relative;
  }
  .ph::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: var(--bg);
    pointer-events: none;
  }

  :global(.post a) {
    overflow-wrap: anywhere;
  }
  :global(.post .katex-display) {
    overflow-x: auto;
    overflow-y: hidden;
  }
</style>
