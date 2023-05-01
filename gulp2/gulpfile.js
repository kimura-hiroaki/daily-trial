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
    return gulp.src("./src/assets/sass/**/*.scss")
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssSorter({
            "order": "smacss"
        })]))
        .pipe(mmq())
        .pipe(gulp.dest("./public/assets/css"))
        .pipe(cleanCss())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("./public/assets/css"))
}

function watch() {
    gulp.watch("./src/assets/sass/**/*.scss", gulp.series(compileSass, broweserReload));    //順番に
}

function browserInit(done) {
    browsersync.init({
        server: {
            baseDir: "./public"
        }
    });
    done();
}
function broweserReload(done) {
    browsersync.reload();
    dobe();
}

function minJS() {
    return gulp.src("./src/assets/js/**/*.js")
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("./public/assets/js"))
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

        .pipe(gulp.dest("./public/assets/img"))
}

exports.test = test;
exports.compileSass = compileSass;
exports.watch = watch;
exports.browserInit = browserInit;
exports.minJS = minJS;
exports.formatHTML = formatHTML;

exports.dev = gulp.parallel(browserInit, watch);    //同時に
exports.build = gulp.parallel(compileSass, minJS, formatHTML, copyImage);    //同時に