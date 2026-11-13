# 不器 · Buqi

一个以技术研究、文学与思想写作为中心的 Astro + MDX 个人网站。支持中英文、KaTeX 数学公式、代码高亮、RSS、技术目录和 GitHub Pages 自动部署。

## 本地运行

安装 Node.js 24，然后执行：

```bash
npm install
npm run dev
```

打开 http://localhost:4321 查看网站。正式发布前，用 `npm run build` 检查构建。

## 发布到 GitHub Pages（ccggddmm/buqi）

1. 将项目文件提交到 https://github.com/ccggddmm/buqi 的 `main` 分支。
2. 在 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
3. GitHub Actions 自动构建后访问 https://ccggddmm.github.io/buqi/ 。

项目已在 `astro.config.mjs` 设置 `base: '/buqi'`，所有导航链接支持项目子路径。
如将来迁移到 `ccggddmm.github.io` 根仓库，需要删除 `base` 配置。

## 写文章

在 `src/content/writing/` 里新建 `.md` 或 `.mdx` 文件：

```md
---
title: "文章标题"
description: "文章摘要"
date: 2026-11-12
section: engineering
language: zh
status: published
featured: false
tags: [AI, Research]
---

正文从这里开始。
```

- `section` 只能是 `engineering`、`essays` 或 `notes`。
- `status: draft` 不会生成公开文章页，但**公开仓库仍能看到草稿源文件**。私密草稿请放在本地或私人仓库。
- `.mdx` 适合技术文章和交互组件，`.md` 适合普通随笔。
- 主页精选由 `featured: true` 控制。
- 写完后 `git add . && git commit -m "New post" && git push` 自动发布。

## 发布前请检查

- 替换三篇示例文章（都含 Sample / 示例标识）。
- 更新 About、Research 个人信息。
- 检查站点域名、头像/Logo、文章日期、联系方式。
- 也可以把示例文章 `status` 改为 `draft` 后再上线。

## 技术说明

- 数学公式使用 `remark-math` / `rehype-katex`。网络字体不可用时会回退到系统衬线字体。
