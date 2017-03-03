var gulp = require('gulp'),
    AWS = require('aws-sdk'),
    s3 = require('vinyl-s3'),
    through2 = require('through2'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

credentials = new AWS.SharedIniFileCredentials({profile: 'upcontent'});

s3obj = new AWS.S3({credentials: credentials, region: 'us-west-2'});

gulp.task('stage', function() {
    return gulp.src('public/**/*', {buffer: false})
        .pipe(through2.obj(function(file, _, done) {
            file.contentEncoding = ['identity'];
            this.push(file);
            done();
        }))
        .pipe(
            s3.dest('', {
                s3: s3obj,
                awsOptions: {
                  Bucket: 'marketing.qa.upcontent',
                  CacheControl: 'max-age=300, must-revalidate'
                }
            })
        );
});

gulp.task('publish', function() {
    return gulp.src('public/**/*', {buffer: false})
        .pipe(through2.obj(function(file, _, done) {
            file.contentEncoding = ['identity'];
            this.push(file);
            done();
        }))
        .pipe(
            s3.dest('', {
                s3: s3obj,
                awsOptions: {
                  Bucket: 'marketing.prod.upcontent',
                  CacheControl: 'max-age=3600, must-revalidate'
                }
            })
        );
});

var sassPaths = [
  'static/bower_components/foundation-sites/scss',
  'static/bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe(sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('static/css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
