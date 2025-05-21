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

## Google AdSense Implementation

The site is set up with Google AdSense ad units in strategic locations:

1. Main ad script is included in the <head> section of all pages
2. Display ad units are placed:
   - After the hero section on the homepage
   - Before the footer on all pages

To complete the setup:

1. Replace `ca-pub-XXXXXXXXXXXXXXXX` with your actual Google AdSense Publisher ID
2. Replace `data-ad-slot="XXXXXXXXXX"` with your actual ad unit IDs
3. You can customize the ad formats and placement as needed

Note: You need to register with Google AdSense and get your website approved before ads will display.

## Deployment

This project is ready for deployment. All essential files for the website's functionality are in the root directory and `src/` and `logos/` folders.

Non-essential files (original SVGs, logo generation scripts, backups) have been moved to the `archive/` directory and can be removed before deployment if desired.

## Features

- Responsive design for all screen sizes
- Dark mode toggle with theme persistence
- Language switching (English/Portuguese)
- Smooth animations with AOS library
- Mobile-friendly navigation
- Google AdSense integration 