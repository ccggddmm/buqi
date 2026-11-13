import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// For a username.github.io repository, this automatically uses the correct root URL.
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'ccggddmm';
const site = process.env.SITE_URL ?? `https://${owner}.github.io`;
export default defineConfig({
  site,
  base: '/buqi',
  integrations: [mdx()],
  markdown: { remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex], shikiConfig: { theme: 'github-light' } },
});
