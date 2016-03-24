var gulp = require ('gulp'),
    sass = require ('gulp-ruby-sass'),
    uglify= require ('gulp-uglify') ; 


    //scripts task
    //uglifies
gulp.task ('scripts' ,function(){
	gulp.src('javascript_events/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/js'));

}) ;

    //styles Task
   
gulp.task('styles', function() {
  return sass('sass/main.scss', { style: 'compressed' })
  
    .pipe(gulp.dest('css/'))
    
   
});
   
   //watchtask
gulp.task('watch', function(){
	gulp.watch('javascript_events/*.js',['scripts']);
	gulp.watch('sass/**.scss',['styles']);

});   

gulp.task('default',['scripts','styles','watch']);



