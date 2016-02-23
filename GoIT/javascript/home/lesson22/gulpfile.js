const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', () =>
    gulp.src('js/script.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('js/dist'))
);

gulp.task('watch', function () {
	gulp.watch('js/script.js', ['babel'])
});

gulp.task('default', ['babel', 'watch']);