const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssSorter = require("css-declaration-sorter");
const mmq = require("gulp-merge-media-queries");
const browsersync = require("browser-sync");
const cleanCss = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const htmlBeatutify = require("gulp-html-beautify");

function test(done) {
    console.log("Hello Gulp");
    done();
}
function compileSass() {
    return gulp.src("./src/assets/sass/**/style.scss")
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssSorter({
            "order": "smacss"
        })]))
        .pipe(mmq())
        .pipe(gulp.dest("../css"))
        .pipe(cleanCss())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("../css"))
}

function watch() {
    gulp.watch("./src/assets/sass/**/*.scss", gulp.series(compileSass, broweserReload));    //順番に
    gulp.watch("./src/assets/js/**/*.js", gulp.series(minJS, broweserReload));
    gulp.watch("./src/assets/img/**/*", gulp.series(copyImage, broweserReload));
    gulp.watch("../**/*.php", broweserReload);
}

function browserInit(done) {
    browsersync.init({
        // server: {
        //     baseDir: "./public"
        // }
        proxy: "http://daytrial.wp/",
        open: true,
        watchOptions: {
            debounceDelay: 10000  //10秒間、タスクの再実行を抑制
        }
    });
    done();
}
function broweserReload(done) {
    browsersync.reload();
    done();
}

function minJS() {
    return gulp.src("./src/assets/js/**/*.js")
        .pipe(gulp.dest("../js"))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("../js"))
}

function formatHTML() {
    return gulp.src("./src/**/*.html")
        .pipe(htmlBeatutify({
            indentt_size: 2,
            indent_with_tabs: true,
        }))
        .pipe(gulp.dest("./public"))
}

function copyImage() {
    return gulp.src("./src/assets/img/**/*")

        .pipe(gulp.dest("../img"))
}

exports.test = test;
exports.compileSass = compileSass;
exports.watch = watch;
exports.browserInit = browserInit;
exports.minJS = minJS;
exports.formatHTML = formatHTML;

exports.dev = gulp.parallel(browserInit, watch);    //同時に
exports.build = gulp.parallel(compileSass, minJS, copyImage);    //同時に