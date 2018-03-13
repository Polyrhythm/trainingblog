const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const browserify = require('gulp-browserify');

gulp.task('default', () =>
    gulp.src('./app.js')
    .pipe(babel({
        presets: [
            ['env', {
                targets: {
                    browsers: ["last 2 versions"],
                },
            }],
        ],
    }))
    .pipe(browserify({

    }))
    // .pipe(uglify())
    .pipe(gulp.dest('bundle'))
);
