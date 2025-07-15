# Solve Website - Media Inventory

This folder contains all photos, videos, and media assets used in the Solve shoe cleaning website.

## 📁 Folder Structure
```
media/
├── images/           # External stock photos (to be downloaded)
├── videos/           # Video files
├── logos/            # Brand logos and favicon
└── MEDIA_INVENTORY.md # This file
```

## 🖼️ Logo Files (LOCAL - ✅ COPIED)
All logo files have been copied from `/logos/` to `/media/logos/`:

- `favicon.png` - Website favicon
- `solve-logo-dark.png` - Dark version of Solve logo
- `solve-logo-light.png` - Light version of Solve logo  
- `solve-logo-dark-small.png` - Small dark logo variant
- `solve-logo-light-small.png` - Small light logo variant

## 🎥 Video Files (EXTERNAL - ⚠️ TO DOWNLOAD)

### Main Background Video
- **Source:** `https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4`
- **Usage:** Hero section background video in index.html, about.html, contact.html
- **Description:** Sample video from Google TV showing outdoor scene
- **Recommended Action:** Download and save as `media/videos/background-hero.mp4`

## 📸 Stock Photos from Unsplash (EXTERNAL - ⚠️ TO DOWNLOAD)

### Service Cards & Gallery Images

#### Image 1: Clean White Sneakers
- **Source:** `https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a`
- **Usage:** Main service card image, gallery thumbnails
- **Description:** Close-up of clean white sneakers
- **Recommended Filename:** `clean-white-sneakers-1.jpg`

#### Image 2: Nike Sneakers Collection  
- **Source:** `https://images.unsplash.com/photo-1600269452121-4f2416e55c28`
- **Usage:** Service cards, gallery images
- **Description:** Collection of Nike sneakers
- **Recommended Filename:** `nike-sneakers-collection.jpg`

#### Image 3: Colorful Sneakers Display
- **Source:** `https://images.unsplash.com/photo-1552346154-21d32810aba3`
- **Usage:** Service sections, gallery
- **Description:** Display of colorful sneakers
- **Recommended Filename:** `colorful-sneakers-display.jpg`

#### Image 4: Nike Red & White Sneakers
- **Source:** `https://images.unsplash.com/photo-1542291026-7eec264c27ff`
- **Usage:** Gallery images, service examples
- **Description:** Nike red and white sneakers
- **Recommended Filename:** `nike-red-white-sneakers.jpg`

#### Image 5: Vans Sneakers
- **Source:** `https://images.unsplash.com/photo-1539185441755-769473a23570`
- **Usage:** Gallery images
- **Description:** Classic Vans sneakers
- **Recommended Filename:** `vans-classic-sneakers.jpg`

#### Image 6: White Athletic Shoes
- **Source:** `https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77`
- **Usage:** Gallery images
- **Description:** White athletic shoes
- **Recommended Filename:** `white-athletic-shoes.jpg`

#### Image 7: Sneaker Store Interior (About Page)
- **Source:** `https://images.unsplash.com/photo-1525092029632-cb75fe5dd776`
- **Usage:** About page header
- **Description:** Interior view of a sneaker store
- **Recommended Filename:** `sneaker-store-interior.jpg`

## 📥 Download Instructions

### For Videos:
```bash
# Download the background video
curl -o "media/videos/background-hero.mp4" "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
```

### For Images:
```bash
# Download all Unsplash images (add parameters for high quality)
curl -o "media/images/clean-white-sneakers-1.jpg" "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80"

curl -o "media/images/nike-sneakers-collection.jpg" "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=1200&q=80"

curl -o "media/images/colorful-sneakers-display.jpg" "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80"

curl -o "media/images/nike-red-white-sneakers.jpg" "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"

curl -o "media/images/vans-classic-sneakers.jpg" "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=80"

curl -o "media/images/white-athletic-shoes.jpg" "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80"

curl -o "media/images/sneaker-store-interior.jpg" "https://images.unsplash.com/photo-1525092029632-cb75fe5dd776?auto=format&fit=crop&w=1200&q=80"
```

### Alternative Download (PowerShell):
```powershell
# Download video
Invoke-WebRequest -Uri "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" -OutFile "media/videos/background-hero.mp4"

# Download images
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80" -OutFile "media/images/clean-white-sneakers-1.jpg"

Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=1200&q=80" -OutFile "media/images/nike-sneakers-collection.jpg"

# ... (repeat for all images)
```

## 📊 Summary
- **✅ Local Files:** 5 logo files (already copied)
- **⚠️ External Files:** 1 video + 7 images (need downloading)
- **Total Media Assets:** 13 files
- **Estimated Download Size:** ~50-100MB

## 🔄 After Download
Once all external files are downloaded:
1. Update HTML files to reference local media paths
2. Remove external CDN dependencies  
3. Optimize images for web (compress if needed)
4. Test all media loads correctly

---
**Created:** January 7, 2025  
**Website:** Solve Shoe Cleaning Services  
**Purpose:** Complete media asset inventory and download guide 