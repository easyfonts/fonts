const css = require('css');
const fs = require('fs');

const cssData = fs.readFileSync('./global.css','utf8');
//console.log(cssData);
const ast = css.parse(cssData);
console.log(ast);