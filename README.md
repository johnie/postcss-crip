# PostCSS Crip [![Build Status][ci-img]][ci]

[PostCSS] plugin Shorthand properties for Crips that are too lazy to write.

[postcss]: https://github.com/postcss/postcss
[ci-img]: https://github.com/johnie/postcss-crip/actions/workflows/main.yml/badge.svg
[ci]: https://travis-ci.org/johnie/postcss-crip

## Installation

```console
$ npm install postcss-crip --save-dev
```

### Quick Start

```js
// Dependencies
const fs = require('fs');
const postcss = require('postcss');
const crip = require('postcss-crip');

// CSS to be processed
const css = fs.readFileSync('input.css', 'utf8');

// Process our crip css using postcss-crip
const output = postcss().use(crip()).process(css).css;

console.log('\n===>Output CSS:\n', output);
```

Or just:

```js
const output = postcss(crip()).process(css).css;
```

**Input:**

```css
/* Input example */
body {
  f: 24px/16px red normal Helvetica, serif;
  bg: #000 url('holy/crip/its/a/crapple.png') top left no-repeat;
  bgz: cover;
}

.crip {
  w: 100px;
  h: 100px;
  pos: relative;
  p: 10px;
  m: 20px;
}
```

**Output:**

```css
/* Output example */
body {
  font: 24px/16px red normal Helvetica, serif;
  background: #000 url('holy/crip/its/a/crapple.png') top left no-repeat;
  background-size: cover;
}

.crip {
  width: 100px;
  height: 100px;
  position: relative;
  padding: 10px;
  margin: 20px;
}
```

#### [See the full list of abbreviations](https://github.com/johnie/crip-css-properties)

## Options

_(default: `{}`)_

You can create your own crip properties. Not all CSS properties are available in the module. So feel free to add your own.

```js
const options = {
  az: ['azimuth'],
};

const output = postcss(crip(options)).process(css).css;
```

**input.css**

```css
td {
  az: far-right;
}
```

**output.css**

```css
td {
  azimuth: far-right;
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
