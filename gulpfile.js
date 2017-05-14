'use strict';
 // import
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

// pug
var pugInputDir = './dev/pug/index.pug'
var pugOutputDir = './static/'
gulp.task('pug', function() {
  return gulp.src(pugInputDir)
    .pipe(pug())
    .pipe(gulp.dest(pugOutputDir))
});

gulp.task('pug:watch', function () {
  gulp.watch(pugInputDir, ['pug']);
});

// SASS
var sassInputDir = './dev/sass/**/*.sass'
var sassOutputDir  = './static/css/'
gulp.task('sass', function () {
  gulp.src(sassInputDir)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(sassOutputDir));
});

gulp.task('sass:watch', function () {
    gulp.watch(sassInputDir, ['sass']);
});

// Run default
gulp.task('default',[    
    'sass','sass:watch',
    'pug','pug:watch',
]);


