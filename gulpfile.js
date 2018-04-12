
const gulp = require('gulp'),
    del = require('del'),
    $ = require('gulp-load-plugins')()




////////////////////////
////////////////////////
////////////////////////
////////////////////////





function copyHTML() {
    return gulp.src('src/**/*.html')
        .pipe($.flatten())
        .pipe(gulp.dest('tmp'))
}

function copyCSS() {
    return gulp.src('src/**/*.sass')
        .pipe($.sass({ outputStyle: 'expanded' }))
        .pipe($.flatten())
        .pipe(gulp.dest('tmp/css'))
}

function copyJS() {
    return gulp.src('src/**/*.js')
        //.pipe($.uglify())
        .pipe($.babel({
            presets: ['env']
        }))
        .pipe($.flatten())
        .pipe(gulp.dest('tmp/js'))
}

function copyIMG() {
    return gulp.src('src/images/*')
        .pipe(gulp.dest('tmp/images'))
}

////////////////////////
////////////////////////
////////////////////////
////////////////////////




gulp.task('clean', () =>
    del(['tmp/css', 'tmp/js', 'tmp/**/*.html', '!tmp/'])
)

gulp.task('html', ['clean'], () => copyHTML())
gulp.task('css', ['html'], () => copyCSS())
gulp.task('js', ['css'], () => copyJS())
gulp.task('img', ['js'], () => copyIMG())

gulp.task('inject', ['img'], () =>
    gulp.src('tmp/index.html')
        .pipe($.inject(gulp.src(['tmp/**/*.css', 'tmp/**/*.js'], { read: false }), { relative: true }))
        .pipe($.htmlmin({ removeComments: true }))
        .pipe(gulp.dest('tmp'))
)

gulp.task('server', ['inject'], () => {
    gulp.src('tmp')
        .pipe($.webserver({
            livereload: true,
            port: 3000
        }))
})

gulp.watch('src/**/*', ['inject'], () => {
    console.log("Changes detected")
})

gulp.task('default', ['server'])