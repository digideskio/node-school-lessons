'use strict';

var split = require('split');
var through = require('through');

var odd = true;

var tr = through(function (line) {
    if (odd) {
        this.queue(line.toString().toLowerCase() + '\n');
    } else {
        this.queue(line.toString().toUpperCase() + '\n');
    }
    
    odd = !odd;
});

process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout);
