'use strict';

var gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css');

gulp.task('concat-css', function () {
  return gulp.src('css/src/*.css')
    .pipe(concatCss("style.main.css"))
    .pipe(gulp.dest('css/dist'));
});

gulp.task('css-min', function() {
  return gulp.src('css/dist/*.css')
    .pipe(prefixer())
    .pipe(cssmin("style.main.min.css"))
    .pipe(gulp.dest('css'));
});    

gulp.task('concat', function() {
  return gulp.src(['js/src/jquery.customSelect.min.js', 'js/src/jquery.jcarousel.min.js', 'js/src/jcarousel.basic.js', 'js/src/script.js'])
    .pipe(concat('script.main.js'))
    .pipe(gulp.dest('js/dist/'));
});

gulp.task('compress', function() {
  return gulp.src('js/dist/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

gulp.task('imagemin', function() {
  return gulp.src('img/src/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img'));
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});


gulp.task('default', ['concat-css', 'css-min', 'concat', 'compress', 'imagemin']);