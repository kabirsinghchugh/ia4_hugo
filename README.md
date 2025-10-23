# iA4 Hugo Site

A static Hugo site converted from the popular iA4 WordPress theme, maintaining the minimalist aesthetic while adding modern static site benefits.

## Features

- **Minimalist Design**: Clean, content-focused layout inspired by the original iA4 theme
- **Mathematical Expressions**: KaTeX integration for beautiful math rendering
- **Portfolio Gallery**: Three-column grid layout for showcasing creative work
- **Responsive Design**: Mobile-first approach that works on all devices
- **Clean Excerpts**: Three-line post excerpts to avoid homepage clutter
- **Fast Performance**: Static site generation for optimal loading speeds

## Quick Start

### Prerequisites

- Hugo (extended version) installed on your system
- Git (optional, for version control)

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Start the development server:

```bash
hugo server --buildDrafts --buildFuture
```

4. Open your browser to `http://localhost:1313`

### Building for Production

To build the static site for deployment:

```bash
hugo --minify
```

The generated site will be in the `public/` directory.

## Content Management

### Adding Blog Posts

Create new blog posts in the `content/posts/` directory:

```bash
hugo new posts/my-new-post.md
```

Example front matter:
```yaml
---
title: "My New Post"
date: 2024-01-15T10:00:00Z
tags: ["tag1", "tag2"]
categories: ["Category"]
featured_image: "/img/my-image.jpg"
featured_image_alt: "Image description"
---
```

### Adding Portfolio Items

Create new portfolio items in the `content/portfolio/` directory:

```bash
hugo new portfolio/my-project.md
```

Example front matter:
```yaml
---
title: "My Project"
date: 2024-01-15T10:00:00Z
portfolio_types: ["Web Design", "UI/UX"]
featured_image: "/img/project-image.jpg"
project_url: "https://example.com"
gallery:
  - image: "/img/gallery1.jpg"
    alt: "Gallery image 1"
    caption: "Image caption"
  - image: "/img/gallery2.jpg"
    alt: "Gallery image 2"
    caption: "Another caption"
---
```

### Mathematical Expressions

Use KaTeX syntax for mathematical expressions:

- Inline math: `$E = mc^2$`
- Display math: `$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$`

## Deployment Options

### 1. Netlify (Recommended)

1. Push your site to a Git repository (GitHub, GitLab, etc.)
2. Connect your repository to Netlify
3. Set build command: `hugo --minify`
4. Set publish directory: `public`
5. Deploy!

### 2. Vercel

1. Push your site to a Git repository
2. Import your project to Vercel
3. Vercel will automatically detect Hugo and configure build settings
4. Deploy!

### 3. GitHub Pages

1. Create a `.github/workflows/hugo.yml` file:

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.120.0
    steps:
      - name: Install Hugo CLI
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb \
          && sudo dpkg -i ${{ runner.temp }}/hugo.deb
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v3
      - name: Build with Hugo
        env:
          HUGO_ENVIRONMENT: production
          HUGO_ENV: production
        run: |
          hugo \
            --minify \
            --baseURL "${{ steps.pages.outputs.base_url }}/"
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

2. Enable GitHub Pages in your repository settings
3. Push to the main branch

### 4. Traditional Web Hosting

1. Build the site: `hugo --minify`
2. Upload the contents of the `public/` directory to your web server
3. Configure your web server to serve the files

## Customization

### Site Configuration

Edit `config.toml` to customize:

- Site title and description
- Navigation menu items
- Base URL for production

### Styling

- Main CSS file: `themes/ia4_hugo_theme/static/css/style.css`
- The theme maintains the original iA4 aesthetic with additional responsive improvements

### Theme Structure

```
themes/ia4_hugo_theme/
├── layouts/
│   ├── _default/
│   │   ├── baseof.html
│   │   ├── list.html
│   │   └── single.html
│   ├── partials/
│   │   ├── head.html
│   │   ├── header.html
│   │   ├── footer.html
│   │   ├── content-excerpt.html
│   │   └── portfolio-card.html
│   ├── portfolio/
│   │   ├── list.html
│   │   └── single.html
│   └── index.html
├── static/
│   ├── css/
│   ├── js/
│   ├── img/
│   └── icons/
└── theme.toml
```

## Support

This theme is based on the original iA4 WordPress theme by iA Inc. The Hugo conversion maintains the minimalist philosophy while adding modern static site capabilities.

For Hugo-specific questions, refer to the [Hugo documentation](https://gohugo.io/documentation/).

## License

This Hugo theme conversion maintains compatibility with the original iA4 theme license. Please refer to the original theme documentation for licensing details.

