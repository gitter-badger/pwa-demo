const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const watch = require('gulp-watch');
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
  watch('./src/styles/**/*.scss', () => gulp.run(['sass']));
  watch('./src/**/*.pug', () => gulp.run(['pug']));
  watch('./src/scripts/**/*.js', () => gulp.run(['js']));
});

gulp.task('build', ['pug', 'sass', 'js', 'images', 'meta']);
gulp.task('default', ['watch', 'server']);