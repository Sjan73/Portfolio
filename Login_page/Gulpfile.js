'use strict';

var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),    
    cssmin = require('gulp-cssmin'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');
 
gulp.task('concatCss', function () {
  return gulp.src('css/src/*.css')
    .pipe(concatCss("style.main.css"))
    .pipe(gulp.dest('css/dist'));
});

gulp.task('css-min', function() {
  return gulp.src('css/dist/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('css/'));
});

gulp.task('imagemin', () => {
	return gulp.src('img/src/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('img'));
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});  

gulp.task('default', ['concatCss', 'css-min', 'imagemin']);