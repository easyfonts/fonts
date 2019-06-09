

# Saira Typeface

This typeface was designed by Hector Gatti and developed by the Omnibus Type team. To contribute to the project, visit [github.com/Omnibus-Type](http://github.com/Omnibus-Type).

![sample](./specimen.PNG)

- Online Reference: [google fonts][google-fonts]

[google-fonts]: https://fonts.google.com/specimen/Saira

## Install

```bash
npm install --save @easyfonts/saira-typeface

## or

yarn add @easyfonts/saira-typeface
```

# Example: use all font variants

Trigger your bundler (webpack et al) to include it into your build

```javascript
import '@easfonts/saira-typeface';
```

Above import will include all style and weight variants into your build (1.7Mb), if you want to be more selective try the followig

# Example: use specific font variants

These are a few examples of only selecting specific groups or singualr fontfiles into your build.

For all possible selectible variants view this [table](#overview-of-all-variants);

## Variant Vietnamese

```javascript
import '@easfonts/saira-typeface/saira-vietnamese';
```

Saira font for Vietnamese character set, all font weights from 100 to 900

## Variant Latin

```javascript
import '@easfonts/saira-typeface/saira-latin';
```

Saira font for Latin character set, all font weights from 100 to 900

## Variant Latin Ext

```javascript
import '@easfonts/saira-typeface/saira-latin-ext';
```

Saira font for Latin Extended character set, all font weights from 100 to 900

# Overview of all variants

You get the general idea of selecting perticular set of font files with the `import` command, with import so here is the full table.

| import statement                                                                                     | what is imported                                 |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| <span style="font-family: monospace;">import '@easyfonts/saira-typeface/saira-100-latin-ext';</span> | only 100 `font-weight` of latin extended charset |
| <span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-100-latin';</span>       | only 100 `font-weght` of latin charset           |
| <span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-100-vietnamese';</span>  | only 100 `font-weght` of vietnamese charset      |
| <span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-100';</span>             | only 100 `font-weght` all charsets               |

<span style="font-face: monospace;">import '@easyfonts/saira-typeface/all';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/out.txt';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/ren.js';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-100-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-100-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-100-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-100';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-200-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-200-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-200-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-200';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-300-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-300-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-300-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-300';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-400-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-400-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-400-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-400';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-500-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-500-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-500-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-500';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-600-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-600-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-600-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-600';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-700-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-700-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-700-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-700';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-800-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-800-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-800-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-800';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-900-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-900-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-900-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-900';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-100-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-100-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-100-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-100';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-200-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-200-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-200-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-200';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-300-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-300-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-300-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-300';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-400-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-400-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-400-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-400';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-500-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-500-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-500-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-500';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-600-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-600-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-600-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-600';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-700-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-700-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-700-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-700';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-800-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-800-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-800-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-800';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-900-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-900-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-900-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-900';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-condensed';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-100-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-100-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-100-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-100';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-200-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-200-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-200-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-200';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-300-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-300-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-300-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-300';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-400-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-400-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-400-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-400';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-500-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-500-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-500-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-500';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-600-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-600-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-600-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-600';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-700-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-700-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-700-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-700';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-800-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-800-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-800-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-800';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-900-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-900-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-900-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-900';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-extra-condensed';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-100-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-100-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-100-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-100';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-200-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-200-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-200-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-200';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-300-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-300-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-300-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-300';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-400-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-400-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-400-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-400';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-500-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-500-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-500-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-500';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-600-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-600-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-600-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-600';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-700-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-700-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-700-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-700';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-800-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-800-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-800-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-800';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-900-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-900-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-900-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-900';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-latin-ext';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-latin';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-semi-condensed';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira-vietnamese';</span>
<span style="font-face: monospace;">import '@easyfonts/saira-typeface/saira';</span>
