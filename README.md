# stylus-px2rem

[![](https://jaywcjlove.github.io/sb/ico/npm.svg)](https://www.npmjs.com/package/stylus-px2rem) [![](https://jaywcjlove.github.io/sb/ico/stylus.svg)](http://stylus-lang.com/) [![Build Status](https://travis-ci.org/ride-css/ride-css.svg)](https://github.com/jaywcjlove/stylus-px2rem)

stylus convert px to rem in css files with optional fallback to px.

# Getting Started

If you haven't used [Stylus](http://stylus-lang.com/) before, be sure to check out the [Getting Started](http://stylus-lang.com/try.html#) guide.  Once you're familiar with [Stylus](http://stylus-lang.com/), you may install this plugin with this command:

```bash
npm install stylus-px2rem --save-dev
```

Once the plugin has been installed, it may be you can make your "Stylus" run `xx.styl` it output `CSS`:

# Note

1. `1px` will be ignored for experience, you can override it with define your number named `px2rem_ignore_limit`.

2. If you want to preserve px value in some case(html element for example), use quote like `font-size '16px'`.

## Input/Output

Input

```css
@import "stylus-px2rem"
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

Full convert, `html-font-size` default `10px`, You Can set it up. This setting will not be converted `font-size 10px!important`. 

```css 
@import "stylus-px2rem"
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
@import 'stylus-px2rem/top'
@import 'stylus-px2rem/left'
@import 'stylus-px2rem/right'
@import 'stylus-px2rem/bottom'
@import 'stylus-px2rem/margin'
@import 'stylus-px2rem/padding'
@import 'stylus-px2rem/width'
@import 'stylus-px2rem/height'
@import 'stylus-px2rem/min-height'
@import 'stylus-px2rem/max-height'
@import 'stylus-px2rem/min-width'
@import 'stylus-px2rem/max-width'
@import 'stylus-px2rem/line-height'
html-font-size = 10px;

div 
    margin 24px 24px
    font-size 14px
    padding-bottom 12px
    width 100px
    height 100%
```

You can include `stylus-px2rem` as a normal stylus plugin. Basic example below:

```js
var stylus = require('stylus');
var px2rem = require('stylus-px2rem');

stylus(css)
  .use(px2rem())
  .render(function(err, output){
    console.log(output);
  });
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


gulp.task('default', function() {
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
});
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
/* or Partial convert */
@import 'stylus-px2rem/mixins'
@import 'stylus-px2rem/font-size'
@import 'stylus-px2rem/border'
@import 'stylus-px2rem/margin'
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
