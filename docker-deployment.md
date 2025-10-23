# Hugo Site Deployment Guide

This guide covers deploying the iA4 Hugo site both locally with Docker/Traefik and to various hosting platforms.

## General Deployment Requirements

### Prerequisites
- **Hugo (extended version)**: Required for building the site
- **Git**: Optional but recommended for version control and CI/CD deployments

### Quick Setup
1. Install Hugo:
   ```bash
   # Ubuntu/Debian
   sudo apt install hugo
   
   # Or download from https://github.com/gohugoio/hugo/releases
   ```

2. Test the site locally:
   ```bash
   hugo server --buildDrafts --buildFuture
   ```

3. Build for production:
   ```bash
   hugo --minify
   ```

## Docker-Based Deployment with Traefik

This setup allows you to deploy the Hugo site locally using Docker Compose and Traefik as a reverse proxy.

### Files Required

#### Dockerfile
```dockerfile
# Stage 1: Build Hugo site
FROM klakegg/hugo:0.120.4-ext AS hugo
WORKDIR /src
COPY . .
RUN hugo --minify --destination /output

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=hugo /output /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### docker-compose.yml
```yaml
version: '3.8'

services:
  ia4-hugo-site:
    build: .
    container_name: ia4-hugo-site
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.ia4-hugo-site.rule=Host(`ia4.local`)"
      - "traefik.http.routers.ia4-hugo-site.entrypoints=web"
      - "traefik.http.services.ia4-hugo-site.loadbalancer.server.port=80"
    networks:
      - traefik-public

networks:
  traefik-public:
    external: true
```

### Deployment Steps

1. **Ensure Traefik is running** on your Docker setup
2. **Create the Docker network** (if not exists):
   ```bash
   docker network create traefik-public
   ```

3. **Build and deploy**:
   ```bash
   docker compose up -d --build
   ```

4. **Access the site**:
   - Add `ia4.local` to your `/etc/hosts` file:
     ```
     127.0.0.1 ia4.local
     ```
   - Visit http://ia4.local

### Alternative: Simple Docker Compose (without Traefik)

If you don't have Traefik, use this simplified version:

```yaml
version: '3.8'

services:
  ia4-hugo-site:
    build: .
    container_name: ia4-hugo-site
    ports:
      - "8080:80"
    restart: unless-stopped
```

Then access at http://localhost:8080

## Deployment Checks

### Pre-Deployment Checklist

- [ ] Hugo is installed and working (`hugo version`)
- [ ] Site builds successfully (`hugo --minify`)
- [ ] All static assets are in place
- [ ] `config.toml` has correct `baseURL` for production
- [ ] No draft content is included (unless intended)
- [ ] Math rendering (KaTeX) works correctly
- [ ] Portfolio gallery displays properly
- [ ] Site is responsive on mobile devices

### Docker-Specific Checks

- [ ] Docker and Docker Compose are installed
- [ ] Dockerfile builds without errors
- [ ] Container starts successfully
- [ ] Nginx serves static files correctly
- [ ] Traefik routing works (if using Traefik)
- [ ] Custom domain resolves correctly

### Production Build Verification

After building with `hugo --minify`, verify:

1. **Check public directory structure**:
   ```bash
   ls -la public/
   ```
   Should contain: `index.html`, `posts/`, `portfolio/`, `css/`, `js/`, etc.

2. **Test locally**:
   ```bash
   cd public && python3 -m http.server 8000
   # Visit http://localhost:8000
   ```

3. **Validate HTML**:
   ```bash
   # Check for broken links
   htmltest public/
   ```

## Hosting Platform Deployment

### Netlify (Recommended)
1. Push code to Git repository
2. Connect repository to Netlify
3. Set build command: `hugo --minify`
4. Set publish directory: `public`
5. Deploy!

### Vercel
1. Push code to Git repository
2. Import project to Vercel
3. Vercel auto-detects Hugo
4. Deploy!

### GitHub Pages
1. Create `.github/workflows/hugo.yml` (see README.md)
2. Enable GitHub Pages in repository settings
3. Push to main branch

### Traditional Web Hosting
1. Build site: `hugo --minify`
2. Upload `public/` directory contents to web server
3. Configure web server to serve static files

## Troubleshooting

### Common Issues

**Docker Build Fails**:
- Ensure Hugo extended version is used in Dockerfile
- Check for missing dependencies in theme

**Traefik Routing Issues**:
- Verify Traefik network exists: `docker network ls`
- Check Traefik labels match your setup
- Ensure domain is in hosts file

**Math Not Rendering**:
- Verify KaTeX CSS/JS is included in templates
- Check math delimiters in content

**Portfolio Images Not Displaying**:
- Verify image paths in front matter
- Check static assets are copied correctly

### Quick Commands

```bash
# Rebuild and restart Docker container
docker compose down && docker compose up -d --build

# Check container logs
docker logs ia4-hugo-site

# Test site locally without Docker
hugo server --buildDrafts --buildFuture

# Production build test
hugo --minify && cd public && python3 -m http.server 8000
```

## Maintenance

- Keep Hugo updated for security and features
- Regularly test the Docker build process
- Monitor Traefik routing if using custom domains
- Backup content and configuration files

This deployment approach provides a robust, containerized solution that can easily scale to production hosting platforms when ready.