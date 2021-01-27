'use strict';
const fs = require('fs');
const path = require('path');

const generateList = function (dirName, extension, cbA) {
    fs.readdir(dirName, (error, list) => {
        if (error) {
            return cbA(err) //leaves the second argument null by default
        };
        for (let i = 0; i < list.length; i++) {
            if (path.extname(list[i]) === ("." + extension)) {
                console.log(list[i])
            }
        return cbA(null, data);
        }
    });
}

module.exports = generateList;