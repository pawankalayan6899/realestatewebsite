const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    filename: 'about-1.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/2590716/pexels-photo-2590716.jpeg',
    filename: 'about-2.jpg'
  }
];

const downloadImage = (url, filename) => {
  const targetDir = path.join(__dirname, '..', 'assets', 'images');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const filepath = path.join(targetDir, filename);
  const file = fs.createWriteStream(filepath);

  https.get(url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', err => {
    fs.unlink(filepath, () => {
      console.error(`Error downloading ${filename}:`, err.message);
    });
  });
};

// Download all images
images.forEach(img => downloadImage(img.url, img.filename));
