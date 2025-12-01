# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A minimal static website for Agon Soft SRL built with vanilla HTML and Tailwind CSS v4. The site uses a bold brutalist design with no configuration files or build complexity.

## Development Commands

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Runs two parallel processes:
- `watch-css`: Watches `src/main.css` and rebuilds with Tailwind CLI
- `live-server`: Serves `public/` on port 3000 with auto-reload

### Production Build
```bash
npm run build
```
Compiles and minifies CSS using `npx @tailwindcss/cli --minify`

## Architecture

### Build System
Tailwind CSS v4 with zero configuration:
1. **Source**: `src/main.css` contains `@import "tailwindcss";`
2. **Processing**: Tailwind CLI scans HTML files and generates CSS
3. **Output**: `public/main.css` (committed for GitHub Pages)

No configuration files needed - Tailwind v4 auto-discovers classes in HTML.

### Project Structure
```
src/main.css          # Source CSS (just Tailwind import)
public/
  index.html          # Single-page site
  main.css            # Generated CSS (committed to git)
  robots.txt          # Search engine directives
CNAME                 # GitHub Pages domain (agonsoft.ro)
CLAUDE.md             # Development guide (this file)
DESIGN.md             # Complete design system documentation
.github/
  dependabot.yml      # Automated dependency updates
```

### Design

**Brutalist Bold** - High-contrast design with massive typography (12-20rem headings), heavy 8px borders, and black/white with red/cyan accents. System monospace font throughout.

Full design system documentation: **[DESIGN.md](DESIGN.md)**

### Content

Three main sections:
- **About**: Etymology of "Agon Soft" (Greek "agṓn" + English "soft")
- **Contact**: Business inquiry policy (references only)
- **Legal**: Company details (SRL, established March 2016, fiscal code, registry)

## Deployment

Deployed via GitHub Pages to **agonsoft.ro** (configured in CNAME file).

## Dependencies

Only two dev dependencies:
- `live-server` - Local development server
- `npm-run-all` - Run multiple scripts in parallel

Tailwind CSS v4 is pulled via `npx @tailwindcss/cli` (not installed as dependency).

## Notes

- Version: 0.0.3 (in HTML footer), 0.0.2 (in package.json)
- Dependabot configured for weekly npm updates
- .gitignore excludes only node_modules and package-lock.json
- Built CSS is committed to git (required for GitHub Pages)
