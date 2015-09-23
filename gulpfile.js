'use strict';

var gulp        = require('gulp'),
	pages		= require('gulp-gh-pages');


	gulp.task('deploy', function(){
		return gulp.src("./dist/**/*")
		.pipe(pages());
	})