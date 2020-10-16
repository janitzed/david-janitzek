const gulp = require('gulp');

const del = require('del');

const imagemin = require('gulp-imagemin');

const imageminJpegRecompress = require('imagemin-jpeg-recompress');

const runSequence = require('gulp4-run-sequence');

var exec = require('child_process').exec;

/**
 * Clean
 */
gulp.task('clean', function (done) {
    del.sync([
        './public/**/*',
    ],
        {
            dot: true
        });
    done();
});

/**
 * Compress images
 */
gulp.task('compress:images', function (done) {
    gulp.src('./ImagesToCompress/*.{png,jpg,jpeg,gif,ico}')
        .pipe(imagemin(
            [
                imagemin.gifsicle(),
                imagemin.optipng(),
                imagemin.svgo(),
                imageminJpegRecompress()
            ]
        ))
        .pipe(gulp.dest('./public/images'));
        done();
});

/**
 * Copy font awesome
 */
gulp.task('copy:ff', function (done) {
    gulp.src([
        './fontawesome-free-5.12.1-web/**/*'
    ])
        .pipe(gulp.dest('./public/fontawesome-free-5.12.1-web/'));
    done();
});

gulp.task('prod', function(cb){
    exec('npm run build', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('rights', function(cb){
    exec('sudo chmod 2775 -R *', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
    exec('sudo chmod 775 -R *', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

/**
 * Multiple task runner
 */
gulp.task('compile', function (callback) {
    runSequence(
        [
            'clean',
            'copy:ff',
            'compress:images',
            'prod',
            'rights'
        ],
        callback);
});
