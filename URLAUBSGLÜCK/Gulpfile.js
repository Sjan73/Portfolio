'use strict';

var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
 	prefixer = require('gulp-autoprefixer'),
 	sourcemaps = require('gulp-sourcemaps'),
	concatCss = require('gulp-concat-css'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    pngquant = require('imagemin-pngquant');
 
gulp.task('sass', function () {
  return sass('css/style.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('css/src/'));
});

gulp.task('watch', function () {
	gulp.watch('css/style.scss', ['sass'])
});

gulp.task('prefixer', function () {
    return sass('css/style.scss', {sourcemap: true, style: 'compact'})
        .pipe(prefixer("last 1 version", "> 1%", "ie 8", "ie 7"))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css/src'));
});

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

gulp.task('concat', function() {
  return gulp.src(["js/src/jquery.xdomainrequest.min.js", "js/src/isotope.pkgd.min.js", "js/src/jquery.jcarousel.min.js", "js/src/tmpl.js", 'js/src/script.js'])
    .pipe(concat('script.main.js'))
    .pipe(gulp.dest('js/dist/'));
});

gulp.task('uglify', function() {
  return gulp.src('js/dist/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js/'));
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

gulp.task('default', ['sass', 'prefixer', 'concatCss', 'css-min', 'concat', 'uglify', 'imagemin', 'watch']);