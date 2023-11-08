import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  console.log(posts)
  return rss({
    title: 'Willders Carvajal | Blog',
    description: 'Mi viaje de aprendizaje de Astro',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}`,
    })),
    customData: `<language>es-es</language>`,
  });
}