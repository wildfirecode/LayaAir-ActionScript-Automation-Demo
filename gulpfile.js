var path = require('path');
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var childProcess = require('child_process');

var actionScriptProperties = path.join(__dirname, '.actionScriptProperties');
var argStr = `${actionScriptProperties};iflash=false;windowshow=false;chromerun=false;quickcompile=true`;
var layajs = path.join(__dirname, './.laya/astool/layajs');

gulp.task('livereload', [], function () {
    livereload({ start: true });
    gulp.watch('./bin/**/*.js', (file) => {
        livereload.changed(file.path);
    });
});

gulp.task('compile', [], function () {
    gulp.watch('./src/**/*.as', (file) => {
        console.log(file);
        var child = childProcess.spawn(layajs, [argStr]);
        var t1 = new Date().getTime();
        console.log('compile start...');
        child.stdout.on('data', function (chunk) {
            console.log(chunk + '')
        });
        child.stderr.on('data', function (chunk) {
            console.log('error', chunk)
        });
        child.on('exit', function (code, signal) {
            var t2 = new Date().getTime();
            console.log(`compile end within ${t2 - t1} ms`);
        });
    });
});

gulp.task('default', ['livereload', 'compile'], function () {
});