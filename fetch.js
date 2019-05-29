const css = require('css');
const fs = require('fs');

const cssData = fs.readFileSync('./global.css', 'utf8');
//console.log(cssData);
const ast = css.parse(cssData);
if (ast.type !== 'stylesheet') {
    console.log('not a stylesheet');
    process.exit(1);
}

const {
    stylesheet: {
        parsingErrors,
        rules
    }
} = ast;

if (parsingErrors.length > 0) {
    console.log(`there were parsing errors: ${parsingErrors.join('|')}`);
};

const ruleMap = new Map();
let prevCommentRule;

function processFontSrc(src) {
    const srcSet = new Map();
    const elts = src.split(',').map(s => s.trim());
    // each elt can be split in 1 or more sources and formats
    for (const elt of elts) {
        let url;
        let format;
        let localized = elt.match(/(local|url)\([^()]+\)/);
        if (localized) {
            url = localized[0];
            format = elt.replace(url, '').trim();
            let v
            if (url.startsWith('url')){
                v = srcSet.get('url') || [];
                srcSet.set('url', v);
            }
            else {
                v = srcSet.get('local') || [];
                srcSet.set('local', v);
            }
            v.push({
                url,
                format
            });
        }
    }
    return srcSet;
}

for (const rule of rules) {
    if (rule.type === 'comment') {
        prevCommentRule = rule;
        continue;
    }
    if (rule.type === 'font-face') {
        const fontFace = rule.declarations.reduce((obj, v) => {
            obj[v.property] = v.value;
            return obj;
        }, {});
        fontFace.comment = prevCommentRule.comment.trim();
        const src = fontFace.src = processFontSrc(fontFace.src);
        // construct local fileName
        const [{url, format}] = src.get('url');
        const actualUrl = url.match(/^url\(([^()]+)\)$/);
        if (actualUrl && actualUrl.length === 2){
            fontFace.extUrl = actualUrl[1];
        }
        const fontFamilyCleaned = fontFace['font-family'].match(/^'?([^']+)'?$/); 
        if (fontFamilyCleaned && fontFamilyCleaned.length === 2){
            fontFace.ffamily = fontFamilyCleaned[1]
        }
        const formatCleaned = format.match(/^format\('?([^()']+)'?\)$/);
        if (formatCleaned && formatCleaned.length === 2){
            fontFace.fformat = formatCleaned[1];
        }
        const { fformat, ffamily, comment, ['font-style']: fontstyle } = fontFace;
        console.log(`${ffamily}-${comment}-${fontstyle}.${fformat}`.toLowerCase()+'->'+fontFace.extUrl);
        continue;
    }
    console.log(`Unknown type for ${rule.type}`)
    console.log(rule);
}