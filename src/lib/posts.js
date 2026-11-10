import { base } from '$app/paths';
import { marked } from 'marked';

const files = import.meta.glob('/src/posts/*.md', { query: '?raw', import: 'default', eager: true });

function parse(path, raw) {
  const slug = path.split('/').pop().replace(/\.md$/, '');
  const m = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?([\s\S]*)$/);
  if (!m) return null;
  const d = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(':');
    if (i > 0) d[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  if (d.draft === 'true') return null;
  const fix = (u) => (u && !/^(https?:|\/|#)/.test(u) ? '/' + u : u);
  return {
    slug,
    title: d.title || slug,
    date: d.date || '',
    type: d.type || 'Blog',
    excerpt: d.excerpt || '',
    image: fix(d.image) || '',
    thumb: fix(d.thumb) || '',
    updated: d.updated || d.date || '',
    order: d.order ? Number(d.order) : 99,
    url: d.url && d.url !== '#' ? d.url : '',
    color: d.color || '',
    featured: d.featured === 'true',
    titled: d.titled === 'true',
    body: m[2]
  };
}

export const posts = Object.entries(files)
  .map(([p, raw]) => parse(p, raw))
  .filter(Boolean)
  .sort((a, b) => b.date.localeCompare(a.date));

export const asset = (p) => (p && p.startsWith('/') ? base + p : p);
export const fmt = (d) =>
  new Date(d + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
export const link = (p) => p.url || `${base}/blog/${p.slug}/`;
const bg = (p, img) => (img ? `background-image:url(${asset(img)})` : `background:${p.color || '#233'}`);
export const thumb = (p) => bg(p, p.thumb || p.image);
export const cover = (p) => bg(p, p.image); 

export const featuredPosts = posts
  .filter((p) => p.featured)
  .sort((a, b) => a.order - b.order || b.date.localeCompare(a.date))
  .slice(0, 4);

export const recentPosts = [...posts].sort((a, b) => b.updated.localeCompare(a.updated)).slice(0, 4);

export function getPost(slug) {
  const p = posts.find((x) => x.slug === slug);
  if (!p) return null;
  const toc = [];
  let html = marked.parse(p.body);
  html = html.replace(/<h([23])[^>]*>([\s\S]*?)<\/h\1>/g, (m, l, t) => {
    const id = 's' + toc.length;
    toc.push({ level: l, id, text: t.replace(/<[^>]+>/g, '') });
    return `<h${l} id="${id}">${t}</h${l}>`;
  });
  html = html.replace(/src="\/?assets\//g, `src="${base}/assets/`);
  return { ...p, html, toc };
}
