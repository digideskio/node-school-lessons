'use strict';

var concat = require('concat-stream');

function reverseBuffer(buf) {
    console.log(buf.toString().split('').reverse().join(''));
}

process.stdin
    .pipe(concat(reverseBuffer));
