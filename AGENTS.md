# AGENTS.md - Hugo Site Development Guidelines

## Build/Test Commands
```bash
# Development server with drafts and future posts
hugo server --buildDrafts --buildFuture

# Production build with minification
hugo --minify

# Create new content
hugo new posts/post-name.md
hugo new portfolio/project-name.md
```

## Code Style Guidelines

### Hugo Templates
- Use Go template syntax: `{{ .Title }}` not `{{$.Title}}`
- Partial templates in `layouts/partials/` with descriptive names
- Base template uses `baseof.html` pattern
- Content types: `posts`, `portfolio`, `about`

### CSS/SCSS
- Main stylesheet: `themes/ia4_hugo_theme/static/css/style.css`
- Mobile-first responsive design
- Use existing CSS classes and structure
- Maintain minimalist iA4 aesthetic

### JavaScript
- jQuery-based (already included)
- Files in `themes/ia4_hugo_theme/static/js/`
- Main functionality in `ia4.js`
- Use existing naming conventions (camelCase)

### Content Structure
- Blog posts: `content/posts/` with YAML front matter
- Portfolio: `content/portfolio/` with gallery support
- Front matter must include: title, date
- Optional: tags, categories, featured_image, portfolio_types

### Configuration
- Site config: `config.toml` (not YAML)
- Theme configuration in `themes/ia4_hugo_theme/theme.toml`
- Math expressions enabled via KaTeX
- Goldmark renderer with `unsafe = true` for HTML