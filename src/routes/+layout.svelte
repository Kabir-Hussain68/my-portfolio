<script>
  import 'katex/dist/katex.min.css';
  import '../app.css';
  import { page } from '$app/stores';
  import { base } from '$app/paths';

  $: path = $page.url.pathname;
  $: isHome = path === base + '/' || path === base || path === '/';
</script>

<svg width="0" height="0" style="position:absolute"><defs>
<symbol id="job" viewBox="0 0 24 24"><path d="M10 4h4a2 2 0 012 2v1h4a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1h4V6a2 2 0 012-2zm0 3h4V6h-4z"/></symbol>
<symbol id="pin" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></symbol>
<symbol id="cal" viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 5v11h14V8zm2 2h10v2H7z"/></symbol>
<symbol id="blog" viewBox="0 0 24 24"><path d="M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1zm2 3v4h6V7zm8 0v2h4V7zm0 4v2h4v-2zM6 15v2h12v-2z"/></symbol>
<symbol id="user" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a3 3 0 110 6 3 3 0 010-6zm0 14a8 8 0 01-6-2.7C6 15.5 9 15 12 15s6 .5 6 2.3A8 8 0 0112 20z"/></symbol>
<symbol id="bell" viewBox="0 0 24 24"><path d="M12 2a6 6 0 00-6 6v4l-2 3v1h16v-1l-2-3V8a6 6 0 00-6-6zm-2 17a2 2 0 004 0z"/></symbol>
<symbol id="rss" viewBox="0 0 24 24"><path d="M5 4a15 15 0 0115 15h-3A12 12 0 005 7zm0 6a9 9 0 019 9h-3a6 6 0 00-6-6zm1.5 6a2 2 0 110 4 2 2 0 010-4z"/></symbol>
</defs></svg>

<header>
  <a class="logo" class:show={!isHome} href="{base}/" aria-label="Home"><svg class="i" viewBox="0 0 24 24" style="fill:none;stroke:currentColor;stroke-width:1.3"><path d="M12 2l8 4.5v9L12 22l-8-4.5v-9zM12 2v20M4 6.5l16 9M20 6.5l-16 9"/></svg></a>
  <nav>
    <a class:on={path.startsWith(base + '/blog')} href="{base}/blog/"><svg class="i"><use href="#blog" /></svg> Blog</a>
    <a class:on={path.startsWith(base + '/about')} href="{base}/about/"><svg class="i"><use href="#user" /></svg> About</a>
  </nav>
</header>

<slot />
