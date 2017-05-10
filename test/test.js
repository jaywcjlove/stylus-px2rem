var fs = require('fs');
var path = require('path');
var stylus = require('stylus');
var fsHelp = require('./fs-help');
var should = require('should');
// var px2rem = require('../lib/px2rem');
var px2rem = require('../lib/px2rem');


var files = []
var filesFolder = path.join(process.cwd(), './test/cases');
// return
fsHelp.utils.walkSync(filesFolder, files);

var cases = {};

files.filter(function (file) {
  // bitwise flip to treat result as truthy.
  return ~file.indexOf('.styl');
}).forEach(function(file){
  var css = path.join(__dirname, file.replace('.styl', '.css'));
  var filename = file.replace('.styl', '');
  var styl = path.join(__dirname, file);
  var group = path.dirname(file.split('cases/')[1]).replace('.', 'uncategorized');

  cases[group] = cases[group] || []
  cases[group].push({
    css: fs.readFileSync(css, 'utf8').replace(/\r/g, '').replace(/\s+/g, ''),
    group: group,
    name: path.basename(filename),
    styl: fs.readFileSync(styl, 'utf8').replace(/\r/g, '')
  })
});

describe('Mixin integration', function () {
  Object.keys(cases).forEach(function (group) {
    describe(group, function () {
      cases[group].forEach(function (test) {
        var name = test.name.replace(/\/+/g, ':').replace('cases:', '').replace(/[-.]/g, ' ');
        // testing
        it(name, function () {
          var style = stylus(test.styl).use(px2rem()).set('filename', test.name).define('url', stylus.url());
          if (~test.styl.indexOf('compress')) style.set('compress', true);
          style.render(function (error, actual) {
            if (error) throw error;
            actual.replace(/\s+/g, '').trim().should.equal(test.css);
          });
        });
      });
    });
  });
});