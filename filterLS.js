var dir = process.argv[2];
// var ext = process.argv[3];
var ext = '.' + process.argv[3];
var fs = require('fs');
var path = require('path');

fs.readdir(dir, function(error, dirFiles){
    // console.log(String(dirFiles));
    var filtered = dirFiles.filter(function(filename){
        // var temp = filename.split('.');
        // return temp[temp.length -1] === ext;
        return path.extname(filename) === ext;
    });
    for(var i=0; i<filtered.length; i++) console.log(filtered[i]);
});


// Official solution -- forEach is good. Saved another loop
fs.readdir(dir, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})