
const { src, dest }     = require('gulp');
const sass              = require('gulp-sass')(require('sass'));
const concat            = require('gulp-concat');
// const autoprefixser     = require('gulp-autoprefixser');


function styles () {
    return src('app/scss/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('styse.min.css'))
    // .pipe(
    //     autoprefixser({
    //         overrideBrowserlist: ['last 10 versions'],
    //         grid: true
    //     })
    // )
    .pipe(dest('app/css'))
}

function watching() {
    watch(['app/scss/**/*.scss'], styles)
}

exports.styles = styles;
exports.watching = watching;