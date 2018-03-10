const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');
const merge = require('merge2');

const tsProject = ts.createProject('tsconfig.json');

const libDir = 'lib';
const srcDir = 'src';
const tmpDidr = 'tmp';

gulp.task('build:clean', () => {
    return gulp.
        src([libDir, tmpDidr], { read: false }).
        pipe(clean({ force: true }));
});

gulp.task('build:ts', ['build:clean'], () => {
    const tsResult = gulp.
        src([
            'src/**/*.ts',
            'samples/**/*.ts'
        ]).
        pipe(tsProject());
    return tsResult.js.pipe(gulp.dest(libDir));
});