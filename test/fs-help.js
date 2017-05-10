"use strict";
var fs = require('fs');
var path = require('path');
var utils = (function () {
  function utils() { }
  utils.isDir = function (filepath) {
    var result;
    try {
      result = fs.statSync(filepath).isDirectory();
    }
    catch (e) {
      console.trace(e);
      result = false;
    }
    return result;
  };
  utils.isFile = function (filepath) {
    var result;
    try {
      result = fs.statSync(filepath).isFile();
    }
    catch (e) {
      console.trace(e);
      result = false;
    }
    return result;
  };
  utils.readdirSync = function (dir) {
      var files;
      try {
        files = fs.readdirSync(dir);
      }
      catch (e) {
        console.trace(e);
        files = [];
      }
      return files;
  };
  utils.walkSync = function (dir, filelist) {
    var files = utils.readdirSync(dir);
    files.forEach(function (file) {
      var folder = path.join(dir, file);
      try {
        if (utils.isDir(folder)) {
          filelist = utils.walkSync(folder, filelist);
        }
        else {
          filelist.push(folder.replace(__dirname, '.'));
        }
      }
      catch (e) {
        console.trace(e);
      }
    });
    return filelist;
  };
  return utils;
}());
exports.utils = utils;
