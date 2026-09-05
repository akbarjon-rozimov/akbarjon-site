# akbarjon-rozimov.com

Your personal academic profile + blog, built with [Astro](https://astro.build).
Static, fast, and free to host.

- **Profile**: about, education, experience, publications
- **Blog**: posts tagged by topic (genomics, coding, notes…) with a tag filter
- **Free hosting** on Cloudflare Pages or GitHub Pages

---

## 1. Run it on your computer

You need [Node.js](https://nodejs.org) 18 or newer installed. Then, in a terminal:

```bash
cd akbarjon-site
npm install        # first time only — downloads dependencies
npm run dev        # starts a local preview
```

Open the URL it prints (usually `http://localhost:4321`). The site reloads
automatically as you edit files.

To check the production build at any time:

```bash
npm run build      # outputs the finished site into dist/
npm run preview    # previews that built version
```

---

## 2. Make it yours

Everything you need to edit is in a few obvious places.

### Your details — `src/siteData.ts`
Open this one file to change your name, role, tagline, email, social links,
the About paragraph, and all education + experience entries. It's commented and
plain to read.

### Publications — `src/content/publications/`
One file per paper. Copy `2025-paper.json` and edit the fields:

```json
{
  "title": "Paper title",
  "authors": "Rozimov A., Coauthor B.",
  "venue": "Journal Name",
  "year": 2025,
  "link": "https://doi.org/...",   // optional
  "doi": "10.xxxx/xxxxx",          // optional
  "order": 1                        // ties within the same year (lower = higher)
}
```
Papers sort newest-year first automatically. Delete a file to remove a paper.

### Blog posts — `src/content/blog/`
One Markdown file per post. Copy an existing `.md` and edit the top block:

```markdown
---
title: My post title
description: One-line summary shown in the list.
date: 2026-09-05
tags: [genomics, coding]
draft: false          # set true to hide it while you write
---

Write your post here in normal Markdown.
```
New tags appear in the blog filter by themselves. Posts sort newest-first.

### Colors and fonts — `src/styles/global.css`
The palette lives in the `:root` block at the top (the teal accent is
`--accent`). Fonts are loaded in `src/layouts/Base.astro`.

---

## 3. Put it online (free)

### Step A — Register the domain
Buy `akbarjon-rozimov.com` from [Cloudflare](https://www.cloudflare.com/products/registrar/)
or [Porkbun](https://porkbun.com) (both sell at cost, ~$10–15/year).
If you use Cloudflare for the domain, Step C is even simpler.

### Step B — Push the code to GitHub
1. Create a free account at [github.com](https://github.com).
2. Make a new **empty** repository (e.g. `akbarjon-site`). Don't add a README.
3. In your terminal, from inside this folder:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/akbarjon-site.git
git push -u origin main
```

### Step C — Deploy with Cloudflare Pages (recommended)
1. Go to the [Cloudflare dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Pick your repo. Set:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
3. Click **Save and Deploy**. You'll get a live `*.pages.dev` URL in ~1 minute.
4. In the project → **Custom domains** → **Set up a domain** → enter
   `akbarjon-rozimov.com`. Cloudflare adds the DNS records for you (instant if
   your domain is registered with Cloudflare; otherwise it shows the records to
   add at your registrar).

Every time you `git push`, the site rebuilds and redeploys automatically.

### Alternative — GitHub Pages
Cloudflare is smoother, but GitHub Pages works too. Tell me if you'd prefer it
and I'll add the GitHub Actions workflow file.

---

## 4. Everyday workflow

Writing a new post is three steps:

```bash
# 1. create a file in src/content/blog/, e.g. my-new-post.md
# 2. commit and push
git add .
git commit -m "New post: my new post"
git push
# 3. the live site updates on its own
```

That's it. Questions or something broke? Paste the error back to Claude.
