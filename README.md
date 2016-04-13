# stylus-px2rem

[![](https://jaywcjlove.github.io/sb/ico/npm.svg)](https://www.npmjs.com/package/stylus-px2rem) [![](https://jaywcjlove.github.io/sb/ico/stylus.svg)](http://stylus-lang.com/)

stylus convert px to rem in css files with optional fallback to px.

# Getting Started

If you haven't used [Stylus](http://stylus-lang.com/) before, be sure to check out the [Getting Started](http://stylus-lang.com/try.html#) guide.  Once you're familiar with [Stylus](http://stylus-lang.com/), you may install this plugin with this command:

```bash
npm install stylus-px2rem --save-dev
```

Once the plugin has been installed, it may be you can make your "Stylus" run `xx.styl` it output `CSS`:

## Input/Output

Input

```css
@import "node_modules/stylus-px2rem"
div 
    margin 24px 24px
    font-size 14px
    padding-bottom 12px
    width 100px
    height 100%
```

Output

```css 
div{
    margin:1.5rem 1.5rem;
    font-size:.875rem;
    padding-bottom:.75rem;
    width:6.25rem;
    height:6.25rem
}
```

## Example Usage

Full convert, `html-font-size` default `10px`, You Can set it up.

```css 
@import "node_modules/stylus-px2rem"
div 
    margin 24px 24px
    font-size 14px
    padding-bottom 12px
    width 100px
    height 100%
```

Partial convert

```css 
@import 'stylus-px2rem/mixins'
@import 'stylus-px2rem/font-size'
@import 'stylus-px2rem/border'
@import 'stylus-px2rem/margin'
@import 'stylus-px2rem/padding'
@import 'stylus-px2rem/width'
@import 'stylus-px2rem/height'
@import 'stylus-px2rem/line-height'
html-font-size = 10px;

div 
    margin 24px 24px
    font-size 14px
    padding-bottom 12px
    width 100px
    height 100%
```

## With Gulp Use

With `Gulp` Use `stylus-px2rem`, Add `px2rem()` in `use`.

```js
var gulp = require('gulp');
var gutil = require('gulp-util');
var stylus = require('gulp-stylus');
var px2rem = require('stylus-px2rem');
var autoprefixer = require('gulp-autoprefixer');
var browserslist = ['Android 2.3', 'Android >= 4', 'Chrome >= 20', 'Firefox >= 24', 'Explorer >= 8', 'iOS >= 6', 'Opera >= 12', 'Safari >= 6'];
gulp.src('./public/styl/*.styl')
    .pipe(stylus({
        use:[px2rem()],
        compress:true
    }))
    .pipe(autoprefixer({
        browsers: browserslist,
        cascade: false
    }).on('error',gutil.log))
    .pipe(gulp.dest('./public/css'));
```
index.styl

```css
@import 'stylus-px2rem'
.banner{
    height 140px
    font-size 24px
}
```


## With Plugin Use 

```bash
stylus -u stylus-px2rem index.styl
```

index.styl

```css
@import "stylus-px2rem"
```



```css
@import 'node_modules/stylus-px2rem/lib/stylus-px2rem/mixins'
@import 'node_modules/stylus-px2rem/lib/stylus-px2rem/font-size'
@import 'node_modules/stylus-px2rem/lib/stylus-px2rem/border'
@import 'node_modules/stylus-px2rem/lib/stylus-px2rem/margin'
@import 'node_modules/stylus-px2rem/lib/stylus-px2rem/padding'
@import 'node_modules/stylus-px2rem/lib/stylus-px2rem/width'
@import 'node_modules/stylus-px2rem/lib/stylus-px2rem/height'
@import 'node_modules/stylus-px2rem/lib/stylus-px2rem/line-height'
```