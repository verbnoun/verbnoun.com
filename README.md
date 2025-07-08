# VerbNoun

Jekyll static site with bilingual content support and responsive design.

## Architecture

- **Framework**: Jekyll 4.x
- **Hosting**: GitHub Pages
- **Typography**: Noto Serif JP
- **Build**: Minification via jekyll-minifier

## Structure

```
/
├── _layouts/          # Page templates
├── _posts/           # Article content
├── assets/           # CSS, JS, images
├── tags/             # Tag collection pages
└── *.html            # Site pages
```

## Development

```bash
bundle install
bundle exec jekyll serve
```

## Configuration

- Pagination: 5 posts per page
- Collections: Tags only
- Plugins: SEO, sitemap, feed, minifier
- Theme variables: CSS custom properties

## Content

- Articles use `post` layout
- Pages use `default` layout  
- Tag pages use `tag` layout
- Bilingual content via dual-column layout

## Deployment

Auto-deploy to GitHub Pages on push to main branch.