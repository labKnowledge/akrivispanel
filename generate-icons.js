const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'public', 'akrivispanel-logo.svg');
const outDir = path.join(__dirname, 'public', 'icons');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const tasks = [
  { size: 512, name: 'icon-512x512.png' },
  { size: 192, name: 'icon-192x192.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 32, name: 'favicon.png' },
];

Promise.all(
  tasks.map(({ size, name }) =>
    sharp(src)
      .resize(size, size)
      .png()
      .toFile(path.join(outDir, name))
  )
).then(async () => {
  // Convert 32x32 PNG to favicon.ico
  const faviconPng = path.join(outDir, 'favicon.png');
  const faviconIco = path.join(__dirname, 'public', 'favicon.ico');
  await sharp(faviconPng)
    .resize(32, 32)
    .toFormat('ico')
    .toFile(faviconIco);
  console.log('Icons and favicon generated successfully!');
}).catch(console.error); 