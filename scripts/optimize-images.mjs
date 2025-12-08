import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Crear directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const images = [
    {
        input: 'hero-bottle.png',
        output: 'hero-bottle.webp',
        quality: 85,
        resize: { width: 800 } // Suficiente para hero
    },
    {
        input: 'family-detail.png',
        output: 'family-detail.webp',
        quality: 80,
        resize: { width: 1200 } // Para sección historia
    },
    {
        input: 'terroir-bg.jpg',
        output: 'terroir-bg.webp',
        quality: 75,
        resize: { width: 1920 } // Full HD es suficiente para background
    }
];

console.log('🖼️  Optimizando imágenes...\n');

for (const img of images) {
    const inputPath = path.join(inputDir, img.input);
    const outputPath = path.join(outputDir, img.output);

    try {
        const info = await sharp(inputPath)
            .resize(img.resize)
            .webp({ quality: img.quality })
            .toFile(outputPath);

        const originalSize = fs.statSync(inputPath).size;
        const optimizedSize = info.size;
        const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

        console.log(`✅ ${img.input} → ${img.output}`);
        console.log(`   Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`   Optimizado: ${(optimizedSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`   Reducción: ${reduction}%\n`);
    } catch (error) {
        console.error(`❌ Error procesando ${img.input}:`, error.message);
    }
}

console.log('✨ Optimización completada!');
console.log('📁 Imágenes guardadas en: public/images/optimized/');
