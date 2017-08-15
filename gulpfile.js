var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('livereload', [], function () {
    livereload({ start: true });

    gulp.watch('./bin/**/*.js', (file) => {
        livereload.changed(file.path);
    });
});

gulp.task('compile', [], function () {
    gulp.watch('./src/**/*.as', (file) => {
        // console.log(file);
        // .laya/astool/layajs
        // .actionScriptProperties;iflash=false;windowshow=false;chromerun=false;quickcompile=true
    });
});

gulp.task('default', ['livereload', 'compile'], function () {

});
