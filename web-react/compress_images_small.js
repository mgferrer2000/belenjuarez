import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = 'public/images/sobrebelen';
const files = fs.readdirSync(dir);

async function compress() {
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.JPEG')) {
            console.log(`Further compressing ${file}...`);

            const image = sharp(filePath);

            let targetPath = filePath;
            if (file.toLowerCase().endsWith('.png')) {
                targetPath = filePath.replace(/\.png$/i, '.jpg');
            }

            await image
                .resize({ width: 1000, withoutEnlargement: true }) // Downscale to max width 1000px
                .jpeg({ quality: 75, mozjpeg: true }) // Higher compression
                .toFile(targetPath + '.tmp');

            fs.unlinkSync(filePath);
            fs.renameSync(targetPath + '.tmp', targetPath);
            console.log(`Successfully compressed to ${targetPath}`);
        }
    }
}

compress().catch(console.error);
