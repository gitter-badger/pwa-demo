const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();

gulp.task('server', ['build'], () => {
  browserSync.init({
      server: {
          baseDir: "./dist"
      }
  });
});

gulp.task('pug', () => {
  return gulp.src('src/**/!(_)*.pug')
    .pipe(plumber())
    .pipe(pug({
      basedir: './src',
      locals: require('./src/meta.json')
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('sass', () => {
  return gulp.src('src/styles/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('dist/'))
});

gulp.task('js', () => {
  return gulp.src('src/scripts/**/*.js')
    .pipe(gulp.dest('dist/'))
});

gulp.task('meta', () => {
  return gulp.src('src/meta/**/*')
    .pipe(gulp.dest('dist/'))
});

gulp.task('images', () => {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images'))
});

gulp.task('watch', () => {
  gulp.watch('./src/styles/**/*.scss', ['sass']);
  gulp.watch('./src/**/*.pug', ['pug']);
  gulp.watch('./src/scripts/**/*.js', ['js']);
});

gulp.task('build', ['pug', 'sass', 'js', 'images', 'meta']);
gulp.task('default', ['watch', 'server']);