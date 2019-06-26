- [Synopsis](#synopsis)
- [Install](#install)
- [Usage](#usage)
- [Example](#example)

# Synopsis

By [Tyler Finck][designer]
A gorgeous modern sans-serif with a very long neck. With a whole slew of styles & weights.

![Ostrich Sans 1][pangram1]
![Ostrich Sans 1][pangram2]
![Ostrich Sans 1][pangram3]
![Ostrich Sans 1][pangram4]

# Install

Install the fontface via npm. 

```bash
npm install --save @easyfonts/ostrich-sans
## OR
yarn add @easyfonts/ostrich-sans
```

# Usage

Include the font in your build with 

```javascript

import '@easyfonts/ostrich-sans'; // import all fonts files of the "Ostric Sans typeface"
```

This will include all fontfiles (1.8Mb) in your bundle.

If you are not using all font weights/types you can select a subset of fontfiles to be included into your build.


| import statement                                   | `font-weight` | special                         | `font-family`          | `font-style` |
|----------------------------------------------------|---------------|---------------------------------|------------------------|--------------|
| `import '@easyfonts/ostrich-sans/black';`          | 900           |                                 | `Ostrich Sans`         |              |
| `import '@easyfonts/ostrich-sans/bold';`           | 700           | (race track style double lines) | `Ostrich Sans`         |              |
| `import '@easyfonts/ostrich-sans/dashed';`         | 500           |                                 | `Ostrich Sans Dashed`  |              |
| `import '@easyfonts/ostrich-sans/heavy';`          | 700           |                                 | `Ostrich Sans Heavy`   |              |
| `import '@easyfonts/ostrich-sans/inline-italic';`  | normal        | (race track style double lines) | `Ostrich Sans Inline`  | `italic`     |
| `import '@easyfonts/ostrich-sans/inline-regular';` | normal        | (race track style double lines) | `Ostrich Sans Inline`  |              |
| `import '@easyfonts/ostrich-sans/light';`          | 300           |                                 | `Ostrich Sans `        |              |
| `import '@easyfonts/ostrich-sans/medium';`         | 500           |                                 | `Ostrich Sans Medium`  |              |
| `import '@easyfonts/ostrich-sans/regular';`        | 400           |                                 | `Ostrich Sans`         |              |
| `import '@easyfonts/ostrich-sans/rounded';`        | 500           |                                 | `Ostrich Sans Rounded` |              |






# Example

Include only extra-bold in your bundle

```javascript
import '@easyfonts/ostrich-sans/bold';
```

Include regular and bold in your bundle;

```javascript
import '@easyfonts/ostrich-sans/regular';
import '@easyfonts/ostrich-sans/bold';
```

[designer]: http://www.tylerfinck.com
[pangram1]: ./images/ostrich-sans-1.jpeg
[pangram2]: ./images/ostrich-sans-2.jpeg
[pangram3]: ./images/ostrich-sans-3.jpeg
[pangram4]: ./images/ostrich-sans-4.jpeg


