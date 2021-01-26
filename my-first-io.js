'use strict';
const fs = require("fs");

const buf = fs.readFileSync(process.argv[2]);

const outputStr = buf.toString();

const newLines = outputStr.split('\n').length - 1;

console.log(newLines);