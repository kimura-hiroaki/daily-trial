const gulp = require("gulp");
const pug = require("gulp-pug");

function compilePug() {
    return gulp.src(["./src/**/*.pug", "!./src/**/_*.pug"]) // アンダーバーが付くファイルは対象外
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest("./public"))
}

exports.compilePug = compilePug;