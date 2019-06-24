- [Synopsis](#synopsis)
- [Install](#install)
- [Usage](#usage)
- [Example](#example)

# Synopsis

![League Junction 1][pangram1]

By [Caroline Hadilaksono][designer2] and [Tyler Finck][designer] (last update: November 14, 2017)

Junction is a a humanist sans-serif, and the first open-source type project started by The League of Moveable Type. It has been updated (2014) to include additional weights (light/bold) and expanded international support.


![League Junction 2][pangram2]
![League Junction 3][pangram3]
![League Junction 4][pangram4]

# Install

Install the fontface via npm. 

```bash
npm install --save @easyfonts/junction-typeface
## OR
yarn add @easyfonts/junction-typeface
```

# Usage

Include the font in your build with 

```javascript

import '@easyfonts/leaugue-junction-typeface';
```

This will install all fontfiles and (1.1Mb).

If you are not using all font weights you can select a subset of fontfiles to be included into your build based on the `font-weight`


| import statement                                         | `font-weight` |
| -------------------------------------------------------- | ------------- |
| `import '@easyfonts/leaugue-junction-typeface/light';`   | 200           |
| `import '@easyfonts/leaugue-junction-typeface/regular';` | 400           |
| `import '@easyfonts/leaugue-junction-typeface/bold';`    | 700           |

# Example

Include only extra-bold in your bundle

```javascript
import '@easyfonts/leaugue-junction-typeface/bold';
```

Include regular and bold in your bundle;

```javascript
import '@easyfonts/leaugue-junction-typeface/regular';
import '@easyfonts/leaugue-junction-typeface/bold';
```

[designer]: http://www.tylerfinck.com
[designer2]: http://www.hadilaksono.com
[pangram1]: ./images/junction-1.png
[pangram2]: ./images/junction-2.png
[pangram3]: ./images/junction-3.png
[pangram4]: ./images/junction-4.png


