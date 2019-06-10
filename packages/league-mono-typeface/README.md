![League Mono][sample]

By [Tyler Finck][designer] (last update: November 14, 2017)

- [Synopsis](#synopsis)
- [FAQ](./ofl-faq.md)
- [License](./ofl.md)
# Synopsis

League Mono is a mashup of sorts, inspired by some beautiful forms found in both Fira Mono, Libertinus Mono, and Courier(?!).

League Mono was created for The League of Moveable Type using Glyphs app, with masters for the Thin, Regular, and Bold weights, and interpolated instances for the UltraLight, Light, Medium, SemiBold, and ExtraBold weights. This, unfortunately, is not supported by UFO files, which is why there is a Glyphs source and source files for each weight.

![League Mono Family Pangram][pangram]
![League Mono Details][details]

# Install

Install the fontface via npm. 

```bash
npm install --save @easyfonts/league-mono-typeface
## OR
yarn add @easyfonts/league-mono-typeface
```

# Usage

Include the font in your build with 

```javascript

import '@easyfonts/leaugue-mono-typeface';
```

This will install all fontfiles and (1.1Mb).

If you are not using all font weights you can select a subset of fontfiles to be included into your build based on the `font-weight`


| import statement                                        | `font-weight` |
| ------------------------------------------------------- | ------------- |
| `import '@easyfonts/leaugue-mono-typeface/ultralight';` | 100           |
| `import '@easyfonts/leaugue-mono-typeface/light';`      | 200           |
| `import '@easyfonts/leaugue-mono-typeface/thin';`       | 300           |
| `import '@easyfonts/leaugue-mono-typeface/regular';`    | 400           |
| `import '@easyfonts/leaugue-mono-typeface/medium';`     | 500           |
| `import '@easyfonts/leaugue-mono-typeface/semibold';`   | 600           |
| `import '@easyfonts/leaugue-mono-typeface/bold';`       | 700           |
| `import '@easyfonts/leaugue-mono-typeface/extra-bold';` | 800           |

# Example

Include only extra-bold in your bundle

```javascript
import '@easyfonts/leaugue-mono-typeface/extra-bold';
```

Include regular and semibild in your bundle;

```javascript
import '@easyfonts/leaugue-mono-typeface/regular';
import '@easyfonts/leaugue-mono-typeface/semibold';
```

[sample]: ./leaguemono-sample.png
[designer]: http://www.tylerfinck.com
[pangram]: ./leaguemono-family-pangram.png
[details]: ./leaguemono-details.png


