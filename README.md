# PostCSS Crip [![Build Status][ci-img]][ci]

[PostCSS] plugin Shorthand properties for Crips that are too lazy to write.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/johnie/postcss-crip.svg
[ci]:      https://travis-ci.org/johnie/postcss-crip

```css
.foo {
    /* Input example */
    w: 100px;
    h: 100px;
}
```

```css
.foo {
  /* Output example */
  width: 100px;
  height: 100px;
}
```

## Usage

```js
postcss([ require('postcss-crip') ])
```

See [PostCSS] docs for examples for your environment.
