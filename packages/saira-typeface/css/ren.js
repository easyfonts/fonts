const fs = require('fs');

const allFiles = fs.readdirSync('./');
for (const fileName of allFiles) {
    const newFile = fileName.replace(' ', '-');
    if (fileName !== newFile) {
        fs.renameSync(fileName, newFile);
        console.log(fileName, newFile);
    }
    console.log("|<span style=\"font-face: monospace;\">import '@easyfonts/saira-typeface/css/"+fileName.replace('.css','')+"';</span>|   "+fileName+"      |");
    }