const heicConvert = require('heic-convert');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'assets/profile.HEIC');
const outputPath = path.join(__dirname, 'assets/profile.jpg');

const buffer = fs.readFileSync(inputPath);

heicConvert.all({ buffer, format: 'JPEG', quality: 0.95 })
  .then(result => {
    console.log('Result type:', typeof result);
    console.log('Result is array:', Array.isArray(result));
    if (result && result.data) {
      fs.writeFileSync(outputPath, result.data);
    } else if (Array.isArray(result) && result[0]) {
      const item = result[0];
      if (item && item.data) {
        fs.writeFileSync(outputPath, item.data);
      } else if (Buffer.isBuffer(item)) {
        fs.writeFileSync(outputPath, item);
      }
    } else if (Buffer.isBuffer(result)) {
      fs.writeFileSync(outputPath, result);
    }
    console.log('✓ Image converted successfully to JPG!');
    process.exit(0);
  })
  .catch(e => {
    console.log('✗ Conversion error:', e.message);
    process.exit(1);
  });
