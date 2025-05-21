const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');
const { JSDOM } = require('jsdom');
const svg2png = require('svg2png');

// Function to convert SVG to PNG
async function convertSvgToPng(svgPath, outputPath, width = 400) {
  try {
    // Read SVG file
    const svgContent = fs.readFileSync(svgPath, 'utf8');
    
    // Convert SVG to PNG buffer using svg2png
    const pngBuffer = await svg2png(Buffer.from(svgContent), { width });
    
    // Write PNG file
    fs.writeFileSync(outputPath, pngBuffer);
    
    console.log(`Successfully converted ${svgPath} to ${outputPath}`);
  } catch (error) {
    console.error(`Error converting ${svgPath} to PNG:`, error);
  }
}

// Convert both light and dark logo versions
async function generateLogoPngs() {
  // Make sure the output directory exists
  const outputDir = path.join(__dirname, 'logos');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Convert light version
  await convertSvgToPng(
    path.join(__dirname, 'solve-logo.svg'),
    path.join(outputDir, 'solve-logo-light.png'),
    400
  );

  // Convert dark version
  await convertSvgToPng(
    path.join(__dirname, 'solve-logo-dark.svg'),
    path.join(outputDir, 'solve-logo-dark.png'),
    400
  );

  // Also generate smaller sizes for favicon/mobile use
  await convertSvgToPng(
    path.join(__dirname, 'solve-logo.svg'),
    path.join(outputDir, 'solve-logo-light-small.png'),
    200
  );

  await convertSvgToPng(
    path.join(__dirname, 'solve-logo-dark.svg'),
    path.join(outputDir, 'solve-logo-dark-small.png'),
    200
  );
}

// Run the conversion
generateLogoPngs().catch(console.error);

console.log(`
To use this script:
1. Install the required dependencies with: npm install canvas jsdom svg2png
2. Run the script with: node generate-logo-png.js
3. Find the PNG logos in the 'logos' directory
`); 