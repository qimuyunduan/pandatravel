
const gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    minifyImage = require('gulp-imagemin'),
    rev = require('gulp-rev'),////- 对文件名加MD5后缀
    revCollector = require('gulp-rev-collector'),//- html css文件路径替换
    runSequence = require('run-sequence'),//Run a series of dependent gulp tasks in order
    cssnano = require('cssnano'),
    postcss = require('gulp-postcss'),
    cssnext = require('postcss-cssnext'),
    cssimport = require('postcss-import'),
    reporter = require('postcss-reporter'),
    stylelint = require('stylelint');

gulp.task('compile',function () {
    gulp.src('./root.css')
        .pipe(postcss([

            cssnext({browsers:"last 2 versions,IE 9"}),
            autoprefixer(),
            // cssnano(),
            stylelint({
                reporters: [
                    {formatter: 'string', console: true}
                ]
            }),
            reporter()
        ]))
        .pipe(gulp.dest('./src/assets/css/'))
});


gulp.task('clean',function () {
   return gulp.src('./src/assets/css/*.css')
       .pipe(clean())
});

gulp.task('minicss',function () {
    return gulp.src('./src/assets/css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/css/'))
});

gulp.task('minipics',function () {
    return gulp.src('./src/assets/image/*.*')
        .pipe(minifyImage())
        .pipe(gulp.dest('./dist/img/'))

});

gulp.task('min',['minicss','minipics'],function () {
    console.log("min tasks completed!")
});

gulp.task('default',function () {
    gulp.watch('./style.css',function () {
        runSequence('clean','compile');
    });
});
