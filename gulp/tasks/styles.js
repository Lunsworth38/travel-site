var gulp = require("gulp"),
postCSS = require("gulp-postcss"),
autoPrefixer = require("autoprefixer"),
cssVars		=	require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssImport = require ("postcss-import");


gulp.task("styles", function() {
	return gulp.src("./app/assets/styles/styles.css")
	.pipe(postCSS([cssImport, cssVars, nested, autoPrefixer]))
	.on("error", function(errorInfo){
		console.log(errorInfo.toString());
		this.emit("end");
	})
	.pipe(gulp.dest("./app/temp/styles"));
});