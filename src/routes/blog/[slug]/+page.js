import { error } from '@sveltejs/kit';
import { getPost, posts } from '$lib/posts';

export function load({ params }) {
  const post = getPost(params.slug);
  if (!post) throw error(404, 'Post not found');
  return { post };
}

export function entries() {
  return posts.filter((p) => !p.url).map((p) => ({ slug: p.slug }));
}
