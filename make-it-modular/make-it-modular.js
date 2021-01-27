'use strict';
const generateList = require('./mymodule')

generateList(process.argv[2], process.argv[3], (error, data) => {
    console.log(data);
});