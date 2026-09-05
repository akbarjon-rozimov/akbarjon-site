import { getCollection } from 'astro:content';

const SITE = 'https://akbarjon-rozimov.com';

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const staticPages = ['', 'publications/', 'blog/'];
  const postPages = posts.map((p) => `blog/${p.slug}/`);
  const all = [...staticPages, ...postPages];

  const urls = all
    .map((path) => `  <url><loc>${SITE}/${path}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}