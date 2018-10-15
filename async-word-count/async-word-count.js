var fs = require('fs');
var path = require('path');

var getWordCount = function (filePath, callback) {
  fs.readFile(filePath, 'utf-8', function (err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function (filePathOne, filePathTwo, callback) {
  getWordCount(filePathOne, (err, data1) => {
    var data1 = data1
    console.log('data1', err, data1)
    if (err) { callback(err) } // return    
    getTotalWordCount(filePathTwo, (err, data2) => {
      console.log('data2', err, data2)
      if (err) { callback(err) }//return 
      var total = data1 + data2
      callback(null, total)
    })
  })
};

module.exports = getTotalWordCount;
