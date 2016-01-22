var sass = require('gulp-ruby-sass');
var rename = require('gulp-rename');
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');
var csscomb = require('gulp-csscomb');
var cssmin = require('gulp-cssmin');

gulp.task('sass', function() {
  var name = rename('bundle.css');
  var dist = gulp.dest('./dist');
  var opts = {};

  opts.loadPath = [
    './node_modules'
  ];

  return sass('sass/app.scss', opts)
    .pipe(name)
    .pipe(autoprefixer())
    .pipe(uncss({
      html: ['index.html']
    }))
    .pipe(csscomb())
    .pipe(cssmin())
    .pipe(dist);
});

gulp.task('default', ['sass'], function() {
  gulp.watch('sass/**/*.scss', ['sass']);
});
