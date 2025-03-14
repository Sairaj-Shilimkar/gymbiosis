import fs from 'fs';
import path from 'path';

// Function to replace .jpg and .jpeg with .webp in all files
const replaceImageReferences = (dir) => {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);

        if (fs.lstatSync(fullPath).isDirectory()) {
            replaceImageReferences(fullPath);
        } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Update image paths to point to 'assets/compressed/'
            let updatedContent = content.replace(/\b(assets\/)(.*?)(\.jpg|\.jpeg|\.webp)\b/g, 'assets/compressed/$2.webp');

            if (content !== updatedContent) {
                fs.writeFileSync(fullPath, updatedContent, 'utf8');
                console.log(`✅ Updated: ${fullPath}`);
            }
        }
    });
};

// Start replacing process from 'src' and 'public' directories
replaceImageReferences('./src');
replaceImageReferences('./public');

console.log('🚀 All JPG/JPEG references updated to WebP in assets/compressed/');
