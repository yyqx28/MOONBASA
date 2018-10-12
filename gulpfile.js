var gulp = require("gulp");
// var sass = require("gulp-sass");
//repuire:相当于<script src="gulp.js"></script>
//定义一个复制文件的任务
//task函数的第一个参数：copyHtml是任务名
//task函数的第二个参数：function是任务copyHtml对应的功能
gulp.task("copyHtml",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\item"));
});

gulp.task("copyImg",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\item\\img"));
});
gulp.task("copyCss",function(){
	gulp.src("css/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\item\\css"));
});
gulp.task("copyJs",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\item\\js"));
});
gulp.task("copyFont",function(){
	gulp.src("font/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\item\\font"));
});
gulp.task("copyJSON",function(){
	gulp.src("JSON/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\item\\JSON"));
});
// 监听
gulp.task("watchall",function(){
	gulp.watch("index.html",["copyHtml"]);
	gulp.watch("img/**/*",["copyImg"]);
	gulp.watch("css/**/*",["copyCss"]);
	gulp.watch("js/**/*",["copyJs"]);
	gulp.watch("font/**/*",["copyFont"]);
	gulp.watch("JSON/**/*",["copyJSON"]);

});

