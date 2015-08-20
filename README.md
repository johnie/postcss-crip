# PostCSS Crip [![Build Status][ci-img]][ci]

[PostCSS] plugin Shorthand properties for Crips that are too lazy to write.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/johnie/postcss-crip.svg
[ci]:      https://travis-ci.org/johnie/postcss-crip

## Installation

```console
$ npm install postcss-crip --save-dev
```

### Quick Start

```js
// Dependencies
var fs = require('fs');
var postcss = require('postcss');
var crip = require('postcss-crip');

// CSS to be processed
var css = fs.readFileSync('input.css', 'utf8');

// Process our crip css using postcss-crip
var output = postcss()
  .use(crip())
  .process(css)
  .css

console.log('\n===>Output CSS:\n', output);
```

Or just:

```js
var output = postcss(crip())
  .process(css)
  .css
```

**Input:**

```css
/* Input example */
body{
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
body{
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
var options = {
  'az': ['azimuth']
}

var output = postcss(crip(options))
  .process(css)
  .css;
```

**input.css**

```css
td { 
  az: far-right 
}
```

**output.css**

```css
td { 
  azimuth: far-right 
}
```

## Usage

### Grunt

```js
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({ browsers: ['> 0%'] }).postcss, //Other plugin
          require('postcss-crip')(),
        ]
      },
      dist: {
        src: ['src/*.css'],
        dest: 'build/grunt.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default', ['postcss']);
}
```

### Gulp

```js
var gulp = require('gulp');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var crip = require('postcss-crip')
var autoprefixer = require('autoprefixer-core')

gulp.task('default', function () {
    var processors = [
        autoprefixer({ browsers: ['> 0%'] }), //Other plugin
        crip()
    ];
    gulp.src('src/*.css')
        .pipe(postcss(processors))
        .pipe(rename('gulp.css'))
        .pipe(gulp.dest('build'))
});
gulp.watch('src/*.css', ['default']);
```

---

## Contributing

Fork, work on a branch, install dependencies & run tests before submitting a PR.

```console
$ git clone https://github.com/YOU/postcss-crip.git
$ git checkout -b patch-1
$ npm install
$ npm test
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
