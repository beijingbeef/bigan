const gulp = require('gulp');
const exec = require('child_process').exec;
const scss = require('gulp-scss');
const babel = require('gulp-babel');
const debug = require('gulp-debug');


gulp.task('build', () => {
  // move jquery.
  gulp.src('node_modules/jquery/dist/jquery.min.js')
      .pipe(gulp.dest('public/javascripts/'));

  // move materialize-css.
  gulp.src('node_modules/materialize-css/dist/css/materialize.min.css')
      .pipe(gulp.dest('public/stylesheets/'));

  gulp.src('node_modules/materialize-css/dist/js/materialize.min.js')
      .pipe(gulp.dest('public/javascripts/'));

  gulp.src('node_modules/materialize-css/dist/fonts/**')
      .pipe(gulp.dest('public/fonts/'));

  // compile google proto.
  exec('protoc --js_out=import_style=commonjs:../model/proto *.proto', {
    cwd: './proto'
  }, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
});

gulp.task('scss', () => {
  gulp.src('views/scss/index.scss')
      .pipe(scss())
      .pipe(gulp.dest("public/stylesheets"));
});

gulp.task('babel', function ()  {
  return gulp.src('javascript/main.js')
    .pipe(debug())
    .pipe(babel())
    .pipe(gulp.dest('public/javascripts/'));
});

gulp.task('default', ['scss', 'babel', 'build']);
