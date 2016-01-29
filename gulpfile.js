/**
 * Created by Amit on 1/28/2016.
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

// Scripts task
gulp.task('scripts', function() {
  console.log('It worked Dude!');
  gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest('app/js'));
});

// Defaults
gulp.task('default', ['scripts']);

