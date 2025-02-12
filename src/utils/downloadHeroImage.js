const https = require('https');
const fs = require('fs');
const path = require('path');

const heroImageUrl = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop';

const downloadImage = (url, filename) => {
  const publicPath = path.join(__dirname, '../../public/images');
  
  if (!fs.existsSync(publicPath)) {
    fs.mkdirSync(publicPath, { recursive: true });
  }

  const filepath = path.join(publicPath, filename);
  const file = fs.createWriteStream(filepath);

  https.get(url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', err => {
    fs.unlink(filepath, () => {});
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

downloadImage(heroImageUrl, 'hero.jpg');
