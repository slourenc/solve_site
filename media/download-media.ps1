# Solve Website - Media Download Script (PowerShell)
# This script downloads all external photos and videos used in the website

Write-Host "🎬 Solve Website Media Downloader" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Create directories if they don't exist
if (!(Test-Path "videos")) { New-Item -ItemType Directory -Name "videos" -Force }
if (!(Test-Path "images")) { New-Item -ItemType Directory -Name "images" -Force }

Write-Host "📁 Directories created/verified" -ForegroundColor Green
Write-Host ""

# Download video
Write-Host "🎥 Downloading background video..." -ForegroundColor Yellow
try {
    Invoke-WebRequest -Uri "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" -OutFile "videos/background-hero.mp4" -UseBasicParsing
    Write-Host "✅ Video downloaded successfully!" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to download video: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""

# Download images
$images = @(
    @{
        name = "clean-white-sneakers-1.jpg"
        url = "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80"
        desc = "Clean white sneakers"
    },
    @{
        name = "nike-sneakers-collection.jpg"
        url = "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=1200&q=80"
        desc = "Nike sneakers collection"
    },
    @{
        name = "colorful-sneakers-display.jpg"
        url = "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80"
        desc = "Colorful sneakers display"
    },
    @{
        name = "nike-red-white-sneakers.jpg"
        url = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
        desc = "Nike red & white sneakers"
    },
    @{
        name = "vans-classic-sneakers.jpg"
        url = "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=80"
        desc = "Vans classic sneakers"
    },
    @{
        name = "white-athletic-shoes.jpg"
        url = "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80"
        desc = "White athletic shoes"
    },
    @{
        name = "sneaker-store-interior.jpg"
        url = "https://images.unsplash.com/photo-1525092029632-cb75fe5dd776?auto=format&fit=crop&w=1200&q=80"
        desc = "Sneaker store interior"
    }
)

$successCount = 0
$totalImages = $images.Count

Write-Host "📸 Downloading $totalImages images..." -ForegroundColor Yellow
Write-Host ""

foreach ($image in $images) {
    Write-Host "   Downloading: $($image.desc)..." -ForegroundColor White
    try {
        Invoke-WebRequest -Uri $image.url -OutFile "images/$($image.name)" -UseBasicParsing
        Write-Host "   ✅ $($image.name)" -ForegroundColor Green
        $successCount++
    } catch {
        Write-Host "   ❌ Failed: $($image.name) - $($_.Exception.Message)" -ForegroundColor Red
    }
    Write-Host ""
}

# Summary
Write-Host "📊 Download Summary" -ForegroundColor Cyan
Write-Host "==================" -ForegroundColor Cyan
Write-Host "✅ Images downloaded: $successCount/$totalImages" -ForegroundColor $(if($successCount -eq $totalImages){"Green"}else{"Yellow"})
Write-Host "🎥 Video: background-hero.mp4" -ForegroundColor Green
Write-Host ""

if ($successCount -eq $totalImages) {
    Write-Host "🎉 All media files downloaded successfully!" -ForegroundColor Green
    Write-Host "📁 Files saved to: media/images/ and media/videos/" -ForegroundColor White
} else {
    Write-Host "⚠️  Some downloads failed. Check the errors above." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🔄 Next steps:" -ForegroundColor Cyan
Write-Host "1. Update HTML files to use local media paths" -ForegroundColor White
Write-Host "2. Remove external CDN dependencies" -ForegroundColor White
Write-Host "3. Test all media loads correctly" -ForegroundColor White

# Pause to see results
Write-Host ""
Write-Host "Press any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 