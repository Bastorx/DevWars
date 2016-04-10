'use strict';

var path = require('path');

if (typeof window == 'undefined') {
    var fs = require('fs');
    var pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json')));
} else {
    var pkg = {};
}

module.exports = {
    version                     : pkg.version,
    debug                       : 'true' === process.env.DEBUG,
    url                         : process.env.URL
};
