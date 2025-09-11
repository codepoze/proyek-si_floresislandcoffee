// Image compression script using sharp (install: npm install sharp --save-dev)
// Run with: node compress-images.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = './src/assets';
const outputDir = './src/assets/optimized';

// Create optimized directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const compressionSettings = {
  // Hero images - high quality but compressed
  hero: { width: 1920, height: 1080, quality: 85 },
  
  // Background images - medium quality
  background: { width: 1200, height: 800, quality: 75 },
  
  // Product images - maintain aspect ratio
  product: { width: 800, height: 800, quality: 80 },
  
  // Small icons/logos
  icon: { width: 200, height: 200, quality: 90 },
  
  // News/content images
  content: { width: 600, height: 400, quality: 75 }
};

async function compressImage(inputPath, outputPath, settings) {
  try {
    await sharp(inputPath)
      .resize(settings.width, settings.height, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: settings.quality })
      .png({ quality: settings.quality })
      .webp({ quality: settings.quality })
      .toFile(outputPath);
    
    console.log(`✓ Compressed: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Failed to compress ${inputPath}:`, error.message);
  }
}

async function compressAssets() {
  const largeAssets = [
    { file: 'coffee-farm.png', settings: compressionSettings.background },
    { file: 'hero.png', settings: compressionSettings.hero },
    { file: 'raw-coffe-bw.png', settings: compressionSettings.background },
    { file: 'raw-coffe.png', settings: compressionSettings.background },
    { file: 'factory.jpg', settings: compressionSettings.content },
    { file: 'pour-coffee.png', settings: compressionSettings.product },
    { file: 'farming2.jpeg', settings: compressionSettings.content },
    { file: 'farming3.jpg', settings: compressionSettings.content },
    { file: 'banner.jpg', settings: compressionSettings.content }
  ];

  console.log('🖼️ Starting image compression...\n');

  for (const asset of largeAssets) {
    const inputPath = path.join(assetsDir, asset.file);
    const outputPath = path.join(outputDir, asset.file);

    if (fs.existsSync(inputPath)) {
      await compressImage(inputPath, outputPath, asset.settings);
    } else {
      console.warn(`⚠️ File not found: ${inputPath}`);
    }
  }

  console.log('\n✅ Image compression complete!');
  console.log('📁 Optimized images are in:', outputDir);
  console.log('🔄 Update your imports to use the optimized versions');
}

compressAssets().catch(console.error);