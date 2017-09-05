const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('server', ['pug', 'sass', 'js'], () => {
  browserSync.init({
      server: {
          baseDir: "./dist"
      }
  });
});

gulp.task('pug', () => {
  return gulp.src('src/**/!(_)*.pug')
    .pipe(pug({
      basedir: './src'
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('sass', () => {
  return gulp.src('src/css/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/'))
});

gulp.task('js', () => {
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dist/'))
});

gulp.task('watch', () => {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/**/*.pug', ['pug']);
  gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('default', ['watch', 'server']);