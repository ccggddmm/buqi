# 不器 · Buqi

> 君子不器。——《论语·为政》

一份关于人工智能、文学与思想的个人刊物。这里记录技术研究，也收录阅读札记和随笔。

[阅读不器](https://ccggddmm.github.io/buqi/) · [RSS 订阅](https://ccggddmm.github.io/buqi/rss.xml)

## 本地运行

使用 Node.js 24。

```sh
npm ci
npm run dev
```

站点使用 Astro 和 MDX。文章位于 `src/content/writing/`，支持 Markdown、MDX 和 KaTeX 公式。`npm run build` 生成静态站点，`main` 分支的更新由 GitHub Actions 自动发布到 GitHub Pages。
