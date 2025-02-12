const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  logo: 'https://via.placeholder.com/150x40?text=Thanvi+BuildTech',
  project1: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
  project2: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
  project3: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=800&h=600&fit=crop'
};

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

Object.entries(images).forEach(([name, url]) => {
  downloadImage(url, `${name}.jpg`);
});
