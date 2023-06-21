const fs = require('fs');

const allFiles = fs.readdirSync('./');
for (const fileName of allFiles) {
    const newFile = fileName.replace(' ', '-');
    if (fileName !== newFile) {
        fs.renameSync(fileName, newFile);
        console.log(fileName, newFile);
    }
    const name = fileName.replace('.css', '');
    const col1 = `<span style="font-face: monospace;">import @easyfonts/saira-typeface/css/${name}</span>`;
    const matched = name.match(/^([^0-9]+)([0-9]+)([^0-9]+)?$/);
    const reg = /\-/g;
    if (matched) {
        const familyName = matched[1].replace(reg,' ').trim();
        const size = matched[2].replace(reg, ' ').trim();
        const lang = matched[3] ? matched[3].replace(reg, ' ').trim() : 'all';
        console.log(`|${col1}|${familyName}|${lang}|${size}|`);
    }
}