# AGENTS.md - Hugo Site Development Guidelines

This repo is a Hugo site with a custom theme. Keep edits minimal and consistent
with the existing iA4 aesthetic. Avoid changes to generated output.

## Build / Lint / Test Commands

### Development
```bash
# Development server (drafts + future)
hugo server --buildDrafts --buildFuture

# Development server with more accurate reloads
hugo server --buildDrafts --buildFuture --disableFastRender
```

### Production build
```bash
# Production build with minification
hugo --minify

# Vercel build script (matches deployment behavior)
bash scripts/vercel-build.sh
```

### Lint / Tests
- No linting or automated tests are configured in this repo.
- There is no single-test command; use `hugo server` and manually verify the
  specific page or section you changed (open the affected URL in the browser).
- Do not edit generated output in `public/`.

## Code Style Guidelines (Focus: Code)

### General
- Prefer minimal, surgical edits that match existing patterns.
- Keep ASCII; do not introduce Unicode unless already present.
- Avoid adding tooling or dependencies unless explicitly requested.
- Do not edit generated output in `public/`.
- Keep changes scoped to the files you must touch.

### Hugo Templates (layouts/)
- Use standard Go template syntax: `{{ .Title }}` (avoid `$` unless needed).
- Guard missing values with `{{ with }}` / `{{ else }}` and `{{ default }}`.
- Prefer `.Params` access over hardcoded keys; use `default` for fallbacks.
- Prefer small, reusable partials in `layouts/partials/`.
- When passing multiple values, use dicts:
  `{{ partial "card.html" (dict "item" . "index" $i) }}`
- Avoid complex logic in templates; keep presentation only.
- Avoid `safeHTML` / `safeURL` unless required and the content is trusted.
- Use `baseof.html` + block templates for layout inheritance.
- Avoid calling `.Site.RegularPages` repeatedly in tight loops; store in a var.
- Keep markup semantic (header, nav, main, article, section).
- Indentation: follow existing spacing (4-space in templates here).

### JavaScript (themes/ia4_hugo_theme/static/js/)
- jQuery-based; keep ES5-compatible style to match existing files.
- Use `var` and function expressions (avoid `let` / `const`).
- Naming: camelCase for functions and variables; short and descriptive.
- Avoid global pollution; keep code inside IIFEs when possible.
- Guard against missing elements and undefined data:
  - Check selection length before operating.
  - Handle empty results in UI updates.
- Avoid throwing errors in client scripts; fail gracefully.
- Keep event handlers namespaced if you add new bindings.
- Do not introduce new libraries or build tooling without explicit request.

### CSS (themes/ia4_hugo_theme/static/css/style.css)
- This file is the canonical stylesheet; keep changes here.
- Preserve the minimalist iA4 aesthetic; avoid new font stacks or colors
  unless the design explicitly calls for it.
- Follow existing formatting and section ordering.
- Prefer reusing existing classes; avoid one-off utility classes.
- Keep selectors low-specificity; avoid deeply nested selectors.
- Use responsive patterns consistent with existing media queries.
- Avoid introducing new layout systems unless needed (grid is ok if minimal).
- Dark mode uses `body.dark-mode` overrides near the end of the file.

### Content (content/)
- Content uses YAML front matter; required fields: `title`, `date`.
- Optional fields: `tags`, `categories`, `featured_image`, `portfolio_types`.
- Use `hugo new posts/name.md` or `hugo new portfolio/name.md` to scaffold.
- Dashboard page lives in `content/about.md` (slug: `dashboard`) and can use inline HTML for custom grids.
- Dashboard media placeholders live under `static/images/dashboard/`.
- Keep content Markdown simple; HTML is allowed but should be minimal.

### Data (data/)
- Prefer data files for structured lists rather than hardcoding in templates.
- Use JSON/YAML/TOML; keep keys lowercase with hyphens or underscores.
- Validate template access with `with` / `default` to avoid nil errors.

### Static Assets (static/)
- Add images, icons, and downloads under `static/` with clear subfolders.
- Use descriptive filenames with hyphens (e.g., `movie-cover-01.jpg`).
- Prefer web-friendly sizes; avoid very large images.

### Configuration
- Site config is `config.toml` (not YAML).
- Theme config is `themes/ia4_hugo_theme/theme.toml`.
- Goldmark renderer has `unsafe = true` (HTML allowed in Markdown).

### Naming Conventions
- Files: lowercase with hyphens (e.g., `my-post.md`).
- CSS classes: lowercase with hyphens.
- JS functions/vars: camelCase.
- Partials: descriptive names matching purpose (e.g., `nav.html`).
- Content slugs: lowercase with hyphens.

### Formatting
- Match existing indentation and spacing in templates and CSS.
- Keep long template lines readable; break attributes onto new lines if needed.
- In JS, keep one variable declaration per line when adding new code.

### Types / Data Handling
- Content front matter defines data; avoid hardcoding values in templates.
- When you must hardcode, keep it in content or data files rather than layouts.
- Prefer `.Params` access over hardcoded keys; use `default` for fallbacks.

### Error Handling / Robustness
- Templates: guard missing params with `with` / `default`.
- JS: do not assume nodes exist; handle empty data and search results.
- Avoid throwing errors in client scripts; fail gracefully.
- Avoid breaking layout if an image or field is missing.

### Accessibility
- Ensure images have `alt` text; use meaningful defaults.
- Use proper heading hierarchy on new pages.
- Keep interactive elements keyboard-accessible.

## Cursor / Copilot Rules
- No `.cursor/rules/`, `.cursorrules`, or `.github/copilot-instructions.md`
  were found at repo root when this was updated.
