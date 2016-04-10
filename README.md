# stylus-px2rem

[![](http://jslite.io/sb/ico/npm.svg)](https://www.npmjs.com/package/stylus-px2rem) [![](http://jslite.io/sb/ico/stylus.svg)](http://stylus-lang.com/)

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
@import 'node_modules/stylus-px2rem/lib/mixins'
@import 'node_modules/stylus-px2rem/lib/font-size'
@import 'node_modules/stylus-px2rem/lib/border'
@import 'node_modules/stylus-px2rem/lib/margin'
@import 'node_modules/stylus-px2rem/lib/padding'
@import 'node_modules/stylus-px2rem/lib/width'
@import 'node_modules/stylus-px2rem/lib/height'

html-font-size = 10px;

div 
    margin 24px 24px
    font-size 14px
    padding-bottom 12px
    width 100px
    height 100%
```

