const css = require('css');
const fs = require('fs');
const { resolve } = require('path');

function createLocalFileName(face) {
    const {
        localName,
        fformat,
        ffamily,
        comment,
        ['font-style']: fontstyle
    } = face;
    const fileName = `${localName}-${comment}-${fontstyle}.${fformat}`.toLowerCase().replace(' ', '-');
    return fileName;
}

function readGoogleCSS() {
    const fname = './global.css';
    const cssData = fs.readFileSync(fname, 'utf8');
    //console.log(cssData);
    const ast = css.parse(cssData);
    if (ast.type !== 'stylesheet') {
        console.error(`${fname} is not a stylesheet`);
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

    const faces = new Set();
    let prevCommentRule;

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
            const [{
                url,
                format
            }] = src.get('url');
            const [{
                url: local
            }] = src.get('local');
            const actualLocal = local.match(/^local\('?([^()']+)'?\)$/);

            if (actualLocal && actualLocal.length === 2) {
                fontFace.localName = actualLocal[1].replace(' ', '-').toLowerCase();
            }

            const actualUrl = url.match(/^url\(([^()]+)\)$/);

            if (actualUrl && actualUrl.length === 2) {
                fontFace.extUrl = actualUrl[1];
            }

            const fontFamilyCleaned = fontFace['font-family'].match(/^'?([^']+)'?$/);
            if (fontFamilyCleaned && fontFamilyCleaned.length === 2) {
                fontFace.ffamily = fontFamilyCleaned[1]
            }

            const formatCleaned = format.match(/^format\('?([^()']+)'?\)$/);
            if (formatCleaned && formatCleaned.length === 2) {
                fontFace.fformat = formatCleaned[1];
            }
            faces.add(fontFace);
            continue;
        }
        console.error(`Unknown type for ${rule.type}`)
        console.error(rule);
    }
    return faces;
}

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
            if (url.startsWith('url')) {
                v = srcSet.get('url') || [];
                srcSet.set('url', v);
            } else {
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

function face2CSS(face, prefix = '../fonts/') {
    if (typeof face.src === 'string') return face.rendered;
    const locals = face.src.get('local').map(({
        url
    }) => url).join(', ');
    const localFileName = createLocalFileName(face);
    const urlLocal = `url(${prefix}${localFileName})`;
    const formatLocal = face.src.get('url').map(({
        format
    }) => format).join(',');
    const extUrl = `url(${face.extUrl})`;

    face.src = `${locals}, ${urlLocal} ${formatLocal}, ${extUrl} ${formatLocal}`;

    const rulesElts = ['font-family', 'font-style', 'font-weight', 'font-display', 'src', 'unicode-range'].map(r => {
        return `    ${r}: ${face[r]};`;
    });
    face.rendered = `/* ${face.comment} */\n@font-face {\n${rulesElts.join('\n')}\n}\n`;
    return face.rendered;

}

function createPath(face, ...props) {
    return props.map(prop => face[prop] || 'NA').join('-').replace(/'/g,'');
}

function rollUps(faces, ...props) {
    const rollUp = new Map();
    for (const face of faces.keys()) {
        const key = props.length === 0 ? 'all':createPath(face, ...props).toLowerCase().replace(' ','-');
        const acc = rollUp.get(key) || [];
        rollUp.set(key, acc);
        acc.push(face);
    }
    return rollUp;
}

function showHist(rollup) {
    for (const [key, value] of rollup.entries()) {
        console.log(`${value.length}\t${key}`);    
    }
}

function saveRollup(root, rollup){
    const fullPath = resolve(root);
    fs.mkdirSync(fullPath, { recursive: true });
    for (const [file, faces] of rollup.entries()){
        const writeable = fs.createWriteStream(resolve(root, `${file}.css`));
        for (const face of faces){
            writeable.write(face2CSS(face));
        }
        writeable.end();
    }
}

function saveCurlFile(root, faceSet) {
    const fullPath = resolve(root);
    fs.mkdirSync(fullPath, { recursive: true });
    const writeable = fs.createWriteStream(resolve(root, `curlfonts.sh`));        
    for (const face of faceSet.keys()){
        for (const face of faces){
            writeable.write(face2CSS(face));
        }
        writeable.end();
    }
}



const faces = readGoogleCSS();
const all = rollUps(faces);
const rollupLan = rollUps(faces, 'font-family', 'comment');
const rollupweightLan = rollUps(faces, 'font-family', 'font-weight', 'comment');
const rollupweight = rollUps(faces, 'font-family', 'font-weight');
const rollupFontFamily = rollUps(faces, 'font-family');

saveRollup('./css',rollupLan);
saveRollup('./css',rollupweightLan);
saveRollup('./css',rollupweight);
saveRollup('./css',rollupFontFamily);
saveRollup('./css',all);

showHist(rollupLan);
showHist(rollupweightLan);
showHist(rollupweight);
showHist(rollupFontFamily);
