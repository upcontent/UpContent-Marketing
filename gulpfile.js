var gulp = require('gulp'),
    AWS = require('aws-sdk')
    s3 = require('vinyl-s3');

credentials = new AWS.SharedIniFileCredentials({profile: 'upcontent'});

s3obj = new AWS.S3({credentials: credentials, region: 'us-west-2'});

gulp.task('stage', function() {
    return gulp.src('public/**/*', {buffer: false})
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

gulp.task('default', function() {
  // place code for your default task here
});
