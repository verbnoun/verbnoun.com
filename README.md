# VerbNoun

A Jekyll-powered literary magazine exploring the intersection of words and meaning.

## About

VerbNoun is a responsive literary magazine built with Jekyll and hosted on GitHub Pages. The site features:

- Clean, typography-focused design following principles from "The Elements of Typographic Style"
- Responsive layout optimized for reading
- Integrated Buttondown newsletter signup
- Article archive and writer bio pages
- Single-column layout for optimal reading experience

## Structure

- **Landing Page**: Features recent articles, site summary, and navigation
- **Articles**: Archive of all published pieces
- **Writers**: Bio pages for contributors
- **About**: Information about VerbNoun's mission and approach

## Typography

The design follows typographic principles from Robert Bringhurst's "The Elements of Typographic Style":

- Optimal line length (66 characters)
- Proper text spacing and hierarchy
- Serif fonts for body text
- Careful attention to readability

## Newsletter Integration

The site integrates with Buttondown for newsletter subscriptions. The form is embedded on:
- Landing page
- Individual article pages

## Local Development

To run locally:

```bash
bundle install
bundle exec jekyll serve
```

## Publishing

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Content Management

- Articles: Add new posts to `_posts/` directory
- Writers: Add new writer profiles to `_writers/` directory
- Pages: Edit HTML files in the root directory

## Configuration

Site configuration is managed through `_config.yml`. Key settings include:
- Site title and description
- Social media links
- Plugin configuration
- Collections setup