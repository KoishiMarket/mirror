const https = require('https');
const fs = require('fs');

const url = 'https://registry.koishi.chat/index.json';
const filePath = './src/data.json';

const saveFile = () => {
  const file = fs.createWriteStream(filePath);
  https.get(url, { followAllRedirects: true }, (response) => {
    response.pipe(file);
    console.log(`[${new Date()}] 已同步源`);
  });
}

saveFile();