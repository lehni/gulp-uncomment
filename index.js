var through = require('through2');
var uncomment = require('uncomment');

module.exports = function(options) {
    options = options || {};
    return through.obj(function(file, encoding, callback) {
        file.contents = new Buffer(uncomment(file.contents.toString(), options));
        callback(null, file);
    });
};
