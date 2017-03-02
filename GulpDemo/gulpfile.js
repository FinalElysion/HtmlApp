var gulp = require('gulp'),
	cssminify = require('gulp-minify-css'),
	minify = require('gulp-minify'),
	clean = require('gulp-clean');
//创建任务
gulp.task('default', function() {
	gulp.src('*.css')
	.pipe(gulp.dest('css'));
});

//移动文件
gulp.task('movecss', function() {
	gulp.src('*.css')//指定源文件
	.pipe(
		gulp.dest('minicss')//输出到指定的目录 若该目录不存在会自动创建
	);
});

//监听变化的任务
gulp.task('watchjs', function() {
	gulp.watch('main.js', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});

//多个task
gulp.task('tasks', ['movecss','watchjs'], function() {
	console.log('last task');
});

//压缩css 并移动到指定的文件夹
gulp.task('cssmin', function () {
    gulp.src('*.css')
        .pipe(cssminify())
        .pipe(gulp.dest('minicss'));
});

//压缩js
gulp.task('compress', function () {
    gulp.src('*.js')
        .pipe(minify({
	        ext:{
	            src:'-debug.js',
	            min:'-min.js'
	        },
	        exclude: ['tasks'],
	        ignoreFiles: ['gulpfile.js']
	    }))
	    .pipe(gulp.dest('minijs'))
});

//清除文件
gulp.task('clean-mini-js', function () {
    return gulp.src('minijs', {read: false})
        .pipe(clean());
});