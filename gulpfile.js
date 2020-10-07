const { src, dest, watch } = require("gulp");

const compileSass = require("gulp-sass");

compileSass.compiler = require('node-sass');

const bundleSass = () => {
    return src('./css/*.scss')
        .pipe(compileSass().on('error', compileSass.logError))
        .pipe(dest('./css'));
};

const devWatch = () => {
    watch('./css/*.scss', bundleSass);
};

module.exports = {
  bundleSass, devWatch,
};
