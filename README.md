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

## 写作

私密草稿放在 `src/content/writing/`，文件名以 `.draft.md` 或 `.draft.mdx` 结尾，Git 默认忽略这两类文件。运行 `npm run dev` 可在 Writing 中预览标有「草稿」的文章。发布时去掉文件名中的 `.draft`，把头部的 `status` 改为 `published`，然后提交。线上首页、文章列表、文章页和 RSS 只包含已发布文章。公开仓库中已提交的草稿源码仍可见。

## 流量统计

站点支持 [GoatCounter](https://www.goatcounter.com/)。在 GitHub 仓库的 **Settings → Secrets and variables → Actions → Variables** 设置 `PUBLIC_GOATCOUNTER_SITE`，值为 GoatCounter 后台地址的子域名。设置后在 Actions 手动运行一次部署，统计从新版上线开始。
