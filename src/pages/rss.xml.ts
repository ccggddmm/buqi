import rss from '@astrojs/rss';
import { getPosts, postHref } from '../lib/posts';
export async function GET(context: {site: URL}) {
 const posts = await getPosts();
 return rss({ title:'不器 · Buqi', description:'思考技术，也思考技术之外的人与世界。', site:new URL(import.meta.env.BASE_URL, context.site),
   items:posts.map(p=>({ title:p.data.title, description:p.data.description, pubDate:p.data.date, link:postHref(p.id) })) });
}
