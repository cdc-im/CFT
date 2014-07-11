#!/usr/bin/env node
'use strict';
var fs = require('fs-extra'),
    stat = fs.stat,
    path = require('path'),
    exec = require('child_process').exec;
var src = path.join(__dirname, './' + process.argv.splice(2)[0])
var dest = process.cwd();
fs.copy(src, dest, function(err) {
    if (err) return console.error(err);
    var install = exec('cd ' + dest + '/grunt && npm install',
        function(error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });
    install.stdout.on('data', function(data) {
        console.log(data);
    });
    install.stderr.on('data', function(data) {
        console.log(data);
    });
    install.on('exit', function(code, signal) {
        console.log(code);
    });
});