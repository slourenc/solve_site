# Solve. Shoe Cleaning Website

A responsive website for "Solve.", a premium shoe cleaning service in Lisbon.

## Project Structure

- `index.html`: Main landing page
- `src/`: Contains additional pages (about, contact, download-logo)
- `logos/`: Contains logo images used throughout the site
- `styles.css`: Main stylesheet (generated from Tailwind)
- `aos-fix.css`: CSS fixes for AOS animation library
- `tailwind.config.js`: Tailwind CSS configuration

## Development

To run the site locally:

```
npm install
npm run serve
```

To watch for CSS changes:

```
npm run build:css
```

## Deployment

This project is ready for deployment. All essential files for the website's functionality are in the root directory and `src/` and `logos/` folders.

Non-essential files (original SVGs, logo generation scripts, backups) have been moved to the `archive/` directory and can be removed before deployment if desired.

## Features

- Responsive design for all screen sizes
- Dark mode toggle with theme persistence
- Language switching (English/Portuguese)
- Smooth animations with AOS library
- Mobile-friendly navigation 