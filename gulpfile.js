//Requiring packages
const gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename'),
      watch = require('gulp-watch'),
      browserSync = require('browser-sync').create(),
      eslint = require('gulp-eslint'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cssnano = require('gulp-cssnano'),
      prettyError = require('gulp-prettyError'),
      babel = require('gulp-babel');

//Gulp Tasks Below

//Gulp Scripts Task
gulp.task('scripts', ['lint'], function(){
   gulp.src('./js/*.js')
   .pipe(babel({
      presets: ['es2015'] 
   })) 
   .pipe(uglify())  //call the uglify function on the files 
   .pipe(rename({ extname: '.min.js'}))  //rename uglified file 
   .pipe(gulp.dest('./build/js'))  
});

//Gulp Say Hello Task
gulp.task('say_hello', function(){
   console.log('hello!');
});

//Reload Browser
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });  //end of browser-sync init

    gulp.watch(['./build/js/*.js', './index.html', './sass/style.scss']).on('change', browserSync.reload);
});

//Gulp Watch Function
gulp.task('watch', function(){
   gulp.watch('./js/*.js', ['scripts'])
   gulp.watch('./sass/*.scss', ['sass']);
});

//Gulp Lint 
gulp.task('lint', function() {
    return gulp.src('./js/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
});
 
//Gulp Sass
gulp.task('sass', function() {
   gulp.src('./sass/style.scss')
      .pipe(prettyError()) 
      .pipe(sass())
      .pipe(autoprefixer({
         browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('./build/css'))
      .pipe(cssnano())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./build/css'));
});

//Gulp Default Task
gulp.task('default', ['watch','scripts','browser-sync', 'sass']);  //this is always in the bottom

