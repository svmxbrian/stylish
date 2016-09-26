var gulp = require('gulp');
var exec = require('gulp-exec');
var shell = require('gulp-shell')

gulp.task('copy-css', function() {
    return gulp.src('../build/production/ThemeDemoApp/resources/*.css')
        .pipe(gulp.dest('/Users/brianlee/Documents/Cornerstone/uifw.trunk/testapps/csskitchensinkapp'));
})

gulp.task('default', ['copy-css']);
