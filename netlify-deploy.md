# Netlify Deploy Guide (Hugo + Custom Domain)

This guide walks through deploying this Hugo site to Netlify and attaching the
custom domain `blog.chughkabir.com`.

## 1) Connect the Repo

1. Push the site to GitHub/GitLab/Bitbucket.
2. In Netlify, click "Add new site" -> "Import an existing project".
3. Select the repository and authorize Netlify.

## 2) Build Settings

Use these settings when prompted:

- Build command: `hugo --minify`
- Publish directory: `public`

Optional but recommended environment variables:

- `HUGO_VERSION`: `0.123.7` (or match your local version)
- `HUGO_ENV`: `production`
- `HUGO_ENVIRONMENT`: `production`

## 3) Base URL

Update `config.toml` for production:

- `baseURL = "https://blog.chughkabir.com/"`

Commit and push the change.

## 4) Custom Domain (blog.chughkabir.com)

1. In Netlify: Site settings -> Domain management -> Add custom domain.
2. Add `blog.chughkabir.com` and set it as the primary domain.
3. Netlify will show a DNS target (usually a Netlify subdomain like
   `your-site-name.netlify.app`).

Create a DNS record at your domain provider:

- Type: `CNAME`
- Host/Name: `blog`
- Target/Value: `your-site-name.netlify.app`
- TTL: default

Wait for DNS to propagate, then in Netlify click "Verify DNS configuration".

## 5) HTTPS

Netlify will automatically provision a TLS certificate once DNS is correct.
Enable:

- "Force TLS"

## 6) Deploy Workflow

Recommended workflow:

- `main` branch -> production deploys
- Use PRs for previews (Netlify deploy previews are automatic)

If you want a Netlify config file later, create `netlify.toml`:

```
[build]
  command = "hugo --minify"
  publish = "public"

[context.production.environment]
  HUGO_ENV = "production"
  HUGO_ENVIRONMENT = "production"
  HUGO_VERSION = "0.123.7"
```

## 7) Troubleshooting

- If builds fail, confirm the Hugo version and that you are using the extended
  build of Hugo.
- If the site is missing CSS or assets, verify `baseURL` and that you are
  publishing the `public` directory.
- DNS changes can take time; check with a tool like `dig` or your registrar's
  DNS checker.
