var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var util = require('gulp-util');
var gulpif = require('gulp-if');


var config = {
	assetsDir: 'public/style',
	bowerDir: 'bower_components',
	lessPattern: 'less/**/*.less',
	production: !!util.env.production,
	sourceMaps: !!util.env.production
};

var app ={};


// gulp.task('styles', function(){
// 	gulp.src(config.assetsDir+'/'+config.lessPattern)
// 	.pipe(gulpif(config.sourceMaps, sourcemaps.init()))
// 	.pipe(less())
//  	.pipe(concat('style.css'))
//  	.pipe(config.production ? minifyCss() : util.noop())
//  	.pipe(gulpif(config.sourceMaps, sourcemaps.write('.')))
//  	.pipe(gulp.dest(config.assetsDir));

// });
app.addStyle = function (paths){
 	gulp.src(paths)
 	.pipe(gulpif(config.sourceMaps, sourcemaps.init()))
 	.pipe(less())
  	.pipe(concat('style.css'))
  	.pipe(config.production ? minifyCss() : util.noop())
  	.pipe(gulpif(config.sourceMaps, sourcemaps.write('.')))
  	.pipe(gulp.dest(config.assetsDir));
 }

 gulp.task('styles',function () {
 	app.addStyle([
 		config.bowerDir + '/bootstrap/dist/css/bootstrap.css',
 		config.assetsDir + '/less/**/*.less',
 		], 'style.css');
 });



gulp.task('watch', function(){
	gulp.watch(config.assetsDir+'/'+config.lessPattern,['styles']);
});



gulp.task('default', ['styles' , 'watch']);
