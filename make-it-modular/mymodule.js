'use strict';
const fs = require('fs');
const path = require('path');

function generateList(dirName, extension, callback) {
    fs.readdir(dirName, callback());
    function callback(error, list) {
        if (error) console.log(error.message);
        for (let i = 0; i < list.length; i++) {
            if (path.extname(list[i]) === ("." + extension)) {
                console.log(list[i])
            }
        }
    }
}

module.exports = generateList();