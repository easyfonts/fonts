

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

| import statement                                                                                                     | `font-family`         | `character set` | `font-weight` |
| -------------------------------------------------------------------------------------------------------------------- | --------------------- | --------------- | ------------- |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-100-latin-ext</span>                  | saira                 | latin ext       | 100           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-100-latin</span>                      | saira                 | latin           | 100           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-100-vietnamese</span>                 | saira                 | vietnamese      | 100           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-100</span>                            | saira                 | all             | 100           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-200-latin-ext</span>                  | saira                 | latin ext       | 200           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-200-latin</span>                      | saira                 | latin           | 200           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-200-vietnamese</span>                 | saira                 | vietnamese      | 200           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-200</span>                            | saira                 | all             | 200           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-300-latin-ext</span>                  | saira                 | latin ext       | 300           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-300-latin</span>                      | saira                 | latin           | 300           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-300-vietnamese</span>                 | saira                 | vietnamese      | 300           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-300</span>                            | saira                 | all             | 300           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-400-latin-ext</span>                  | saira                 | latin ext       | 400           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-400-latin</span>                      | saira                 | latin           | 400           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-400-vietnamese</span>                 | saira                 | vietnamese      | 400           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-400</span>                            | saira                 | all             | 400           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-500-latin-ext</span>                  | saira                 | latin ext       | 500           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-500-latin</span>                      | saira                 | latin           | 500           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-500-vietnamese</span>                 | saira                 | vietnamese      | 500           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-500</span>                            | saira                 | all             | 500           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-600-latin-ext</span>                  | saira                 | latin ext       | 600           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-600-latin</span>                      | saira                 | latin           | 600           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-600-vietnamese</span>                 | saira                 | vietnamese      | 600           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-600</span>                            | saira                 | all             | 600           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-700-latin-ext</span>                  | saira                 | latin ext       | 700           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-700-latin</span>                      | saira                 | latin           | 700           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-700-vietnamese</span>                 | saira                 | vietnamese      | 700           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-700</span>                            | saira                 | all             | 700           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-800-latin-ext</span>                  | saira                 | latin ext       | 800           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-800-latin</span>                      | saira                 | latin           | 800           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-800-vietnamese</span>                 | saira                 | vietnamese      | 800           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-800</span>                            | saira                 | all             | 800           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-900-latin-ext</span>                  | saira                 | latin ext       | 900           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-900-latin</span>                      | saira                 | latin           | 900           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-900-vietnamese</span>                 | saira                 | vietnamese      | 900           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-900</span>                            | saira                 | all             | 900           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-100-latin-ext</span>        | saira condensed       | latin ext       | 100           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-100-latin</span>            | saira condensed       | latin           | 100           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-100-vietnamese</span>       | saira condensed       | vietnamese      | 100           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-100</span>                  | saira condensed       | all             | 100           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-200-latin-ext</span>        | saira condensed       | latin ext       | 200           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-200-latin</span>            | saira condensed       | latin           | 200           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-200-vietnamese</span>       | saira condensed       | vietnamese      | 200           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-200</span>                  | saira condensed       | all             | 200           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-300-latin-ext</span>        | saira condensed       | latin ext       | 300           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-300-latin</span>            | saira condensed       | latin           | 300           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-300-vietnamese</span>       | saira condensed       | vietnamese      | 300           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-300</span>                  | saira condensed       | all             | 300           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-400-latin-ext</span>        | saira condensed       | latin ext       | 400           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-400-latin</span>            | saira condensed       | latin           | 400           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-400-vietnamese</span>       | saira condensed       | vietnamese      | 400           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-400</span>                  | saira condensed       | all             | 400           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-500-latin-ext</span>        | saira condensed       | latin ext       | 500           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-500-latin</span>            | saira condensed       | latin           | 500           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-500-vietnamese</span>       | saira condensed       | vietnamese      | 500           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-500</span>                  | saira condensed       | all             | 500           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-600-latin-ext</span>        | saira condensed       | latin ext       | 600           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-600-latin</span>            | saira condensed       | latin           | 600           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-600-vietnamese</span>       | saira condensed       | vietnamese      | 600           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-600</span>                  | saira condensed       | all             | 600           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-700-latin-ext</span>        | saira condensed       | latin ext       | 700           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-700-latin</span>            | saira condensed       | latin           | 700           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-700-vietnamese</span>       | saira condensed       | vietnamese      | 700           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-700</span>                  | saira condensed       | all             | 700           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-800-latin-ext</span>        | saira condensed       | latin ext       | 800           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-800-latin</span>            | saira condensed       | latin           | 800           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-800-vietnamese</span>       | saira condensed       | vietnamese      | 800           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-800</span>                  | saira condensed       | all             | 800           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-900-latin-ext</span>        | saira condensed       | latin ext       | 900           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-900-latin</span>            | saira condensed       | latin           | 900           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-900-vietnamese</span>       | saira condensed       | vietnamese      | 900           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-condensed-900</span>                  | saira condensed       | all             | 900           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-100-latin-ext</span>  | saira extra condensed | latin ext       | 100           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-100-latin</span>      | saira extra condensed | latin           | 100           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-100-vietnamese</span> | saira extra condensed | vietnamese      | 100           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-100</span>            | saira extra condensed | all             | 100           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-200-latin-ext</span>  | saira extra condensed | latin ext       | 200           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-200-latin</span>      | saira extra condensed | latin           | 200           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-200-vietnamese</span> | saira extra condensed | vietnamese      | 200           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-200</span>            | saira extra condensed | all             | 200           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-300-latin-ext</span>  | saira extra condensed | latin ext       | 300           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-300-latin</span>      | saira extra condensed | latin           | 300           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-300-vietnamese</span> | saira extra condensed | vietnamese      | 300           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-300</span>            | saira extra condensed | all             | 300           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-400-latin-ext</span>  | saira extra condensed | latin ext       | 400           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-400-latin</span>      | saira extra condensed | latin           | 400           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-400-vietnamese</span> | saira extra condensed | vietnamese      | 400           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-400</span>            | saira extra condensed | all             | 400           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-500-latin-ext</span>  | saira extra condensed | latin ext       | 500           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-500-latin</span>      | saira extra condensed | latin           | 500           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-500-vietnamese</span> | saira extra condensed | vietnamese      | 500           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-500</span>            | saira extra condensed | all             | 500           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-600-latin-ext</span>  | saira extra condensed | latin ext       | 600           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-600-latin</span>      | saira extra condensed | latin           | 600           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-600-vietnamese</span> | saira extra condensed | vietnamese      | 600           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-600</span>            | saira extra condensed | all             | 600           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-700-latin-ext</span>  | saira extra condensed | latin ext       | 700           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-700-latin</span>      | saira extra condensed | latin           | 700           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-700-vietnamese</span> | saira extra condensed | vietnamese      | 700           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-700</span>            | saira extra condensed | all             | 700           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-800-latin-ext</span>  | saira extra condensed | latin ext       | 800           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-800-latin</span>      | saira extra condensed | latin           | 800           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-800-vietnamese</span> | saira extra condensed | vietnamese      | 800           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-800</span>            | saira extra condensed | all             | 800           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-900-latin-ext</span>  | saira extra condensed | latin ext       | 900           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-900-latin</span>      | saira extra condensed | latin           | 900           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-900-vietnamese</span> | saira extra condensed | vietnamese      | 900           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-extra-condensed-900</span>            | saira extra condensed | all             | 900           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-100-latin-ext</span>   | saira semi condensed  | latin ext       | 100           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-100-latin</span>       | saira semi condensed  | latin           | 100           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-100-vietnamese</span>  | saira semi condensed  | vietnamese      | 100           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-100</span>             | saira semi condensed  | all             | 100           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-200-latin-ext</span>   | saira semi condensed  | latin ext       | 200           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-200-latin</span>       | saira semi condensed  | latin           | 200           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-200-vietnamese</span>  | saira semi condensed  | vietnamese      | 200           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-200</span>             | saira semi condensed  | all             | 200           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-300-latin-ext</span>   | saira semi condensed  | latin ext       | 300           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-300-latin</span>       | saira semi condensed  | latin           | 300           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-300-vietnamese</span>  | saira semi condensed  | vietnamese      | 300           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-300</span>             | saira semi condensed  | all             | 300           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-400-latin-ext</span>   | saira semi condensed  | latin ext       | 400           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-400-latin</span>       | saira semi condensed  | latin           | 400           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-400-vietnamese</span>  | saira semi condensed  | vietnamese      | 400           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-400</span>             | saira semi condensed  | all             | 400           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-500-latin-ext</span>   | saira semi condensed  | latin ext       | 500           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-500-latin</span>       | saira semi condensed  | latin           | 500           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-500-vietnamese</span>  | saira semi condensed  | vietnamese      | 500           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-500</span>             | saira semi condensed  | all             | 500           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-600-latin-ext</span>   | saira semi condensed  | latin ext       | 600           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-600-latin</span>       | saira semi condensed  | latin           | 600           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-600-vietnamese</span>  | saira semi condensed  | vietnamese      | 600           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-600</span>             | saira semi condensed  | all             | 600           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-700-latin-ext</span>   | saira semi condensed  | latin ext       | 700           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-700-latin</span>       | saira semi condensed  | latin           | 700           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-700-vietnamese</span>  | saira semi condensed  | vietnamese      | 700           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-700</span>             | saira semi condensed  | all             | 700           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-800-latin-ext</span>   | saira semi condensed  | latin ext       | 800           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-800-latin</span>       | saira semi condensed  | latin           | 800           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-800-vietnamese</span>  | saira semi condensed  | vietnamese      | 800           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-800</span>             | saira semi condensed  | all             | 800           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-900-latin-ext</span>   | saira semi condensed  | latin ext       | 900           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-900-latin</span>       | saira semi condensed  | latin           | 900           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-900-vietnamese</span>  | saira semi condensed  | vietnamese      | 900           |
| <span style="font-face: monospace;">import @easyfonts/saira-typeface/css/saira-semi-condensed-900</span>             | saira semi condensed  | all             | 900           |

