import { getCollection } from 'astro:content';
export const getPosts = async ({ includeDrafts = false } = {}) => (await getCollection('writing', ({data}) => (import.meta.env.DEV && includeDrafts) || data.status === 'published'))
 .sort((a,b) => b.data.date.valueOf() - a.data.date.valueOf());
export const sectionNames = { engineering: '技术与研究', essays: '文章与思想', notes: '笔记与札记' } as const;
export const postHref = (id: string) => `${import.meta.env.BASE_URL}writing/${id}/`;
