//Requiring packages
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    eslint = require('gulp-eslint');

//Gulp Tasks Below

//Gulp Scripts Task
gulp.task('scripts', function(){
   gulp.src('./js/*.js')
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

    gulp.watch(['build/js/*.js', 'index.html', 'style.css']).on('change', browserSync.reload);
});

//Gulp Watch Function
gulp.task('watch', function(){
   gulp.watch('js/*.js', ['scripts']);
});

//Gulp Lint 
gulp.task('lint', function() {
   gulp.src('./js/*.js')
   .pipe(eslint())
   .pipe(eslint.format())
   .pipe(eslint.failAfterError())
});
 
gulp.task('default', ['lint'], function () {
    // This will only run if the lint task is successful... 
});

//Gulp Default Task
gulp.task('default', ['watch', 'browser-sync']);  //this is always in the bottom 

