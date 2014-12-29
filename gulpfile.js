(function () {
    'use strict';

    var autoPrefixer = require('gulp-autoprefixer');
    var clean = require('gulp-clean');
    var gulp = require('gulp');
    var imagemin = require('gulp-imagemin');
    var inject = require('gulp-inject');
    var livereload = require('gulp-livereload');
    var plumber = require('gulp-plumber');
    var sass = require('gulp-ruby-sass');

    gulp.task('default', [
        'build',
        'watch'
    ], function() {

    });

    gulp.task('build', [
        'clean:build',
        'compileSASS',
        'copyAssets',
        'copyIndex',
        'injectApp'
    ], function() {

    });

    gulp.task('watch', ['build'], function () {
        livereload.listen();
        gulp.watch(['./client/src/**/*'], ['build']);
    });

    gulp.task('clean:build', function () {
        return gulp.src('./client/build/**/*', { read: false })
            .pipe(clean());
    });

    gulp.task('compileSASS', ['clean:build'], function () {
        return gulp.src(['./client/src/scss/styles.scss'])
            .pipe(plumber())
            .pipe(sass({style: 'expanded'}))
            .pipe(autoPrefixer('last 2 version'))
            .pipe(gulp.dest('./client/build/css'));
    });

    gulp.task('copyIndex', ['clean:build'], function () {
        return gulp.src(['./client/src/index.html'])
            .pipe(gulp.dest('./client/build'));
    });

    gulp.task('copyAssets', ['clean:build'], function () {
        return gulp.src(['./client/src/img/**/*'])
            .pipe(gulp.dest('./client/build/img'));
    });

    gulp.task('injectApp', ['compileSASS', 'copyIndex'], function () {
        return gulp.src('./client/build/index.html')
            .pipe(inject(gulp.src('./client/build/css/styles.css', {read: false}), {name: 'app', relative: true}))
            .pipe(gulp.dest('./client/build/'))
            .pipe(livereload());
    });


})();