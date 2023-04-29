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
    return gulp.src(["./src/Asset/sass/**/*.scss", "!./src/Asset/sass/**/_*.scss"])
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssSorter({
            "order": "smacss"
        })]))
        .pipe(mmq())
        .pipe(gulp.dest("./public/Asset/css"))
        .pipe(cleanCss())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("./public/Asset/css"))
}

function watch() {
    gulp.watch("./src/Asset/sass/**/*.scss", gulp.series(compileSass, broweserReload));    //順番に
    gulp.watch("./src/Asset/js/**/*.js", gulp.series(minJS, broweserReload));
    gulp.watch("./src/Asset/img/**/*", gulp.series(copyImage, broweserReload));
    gulp.watch("./src/**/*.html", broweserReload);
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
    return gulp.src("./src/Asset/js/**/*.js")
        .pipe(gulp.dest("./public/Asset/js"))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("./public/Asset/js"))
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
    return gulp.src("./src/Asset/img/**/*")

        .pipe(gulp.dest("./public/Asset/img"))
}

exports.test = test;
exports.compileSass = compileSass;
exports.watch = watch;
exports.browserInit = browserInit;
exports.minJS = minJS;
exports.formatHTML = formatHTML;

exports.dev = gulp.parallel(browserInit, watch);    //同時に
exports.build = gulp.parallel(compileSass, minJS, formatHTML, copyImage);    //同時に