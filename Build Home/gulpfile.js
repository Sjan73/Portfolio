var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
 
gulp.task('sass', function () {
  return sass('css/src/style.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('css/dist/'));
});

gulp.task('watch', function () {
	gulp.watch('css/src/style.scss', ['sass'])
});

gulp.task('default', ['sass', 'watch']);