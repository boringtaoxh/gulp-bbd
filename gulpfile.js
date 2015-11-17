'use strict';

var gulp        = require('gulp'),
    $           = require('gulp-load-plugins')(),
    concat      = require('gulp-concat'),
    /* css */
    stylus      = require('gulp-stylus'),
    minifycss   = require('gulp-minify-css'),
    /* js */
    coffee = require('gulp-coffee'),
    vendor = require('gulp-concat-vendor'),
    minifyjs    = require('gulp-uglify'),
    /* server */
    livereload  = require('gulp-livereload'),
    server = livereload(),
    nodemon     = require('gulp-nodemon');

/* build */
var build = {
  styles: ['build/public/assets/styles/*.styl'],
  public: ['build/public/**/*.coffee'],
  server: ['build/server/**/*.coffee'],
  test: ['build/test/**/*.coffee']
}

gulp.task('styles', function(){
  return gulp.src(build.styles)
    .pipe(stylus())
    .pipe(concat('styles.css'))
    .pipe(minifycss({keepBreaks:true}))
    .pipe(gulp.dest('public/assets/styles/'));
});

gulp.task('vendor', function() {  
  return gulp.src('vendor/*')
    .pipe(vendor('vendor.js'))
    .pipe(minifyjs())
    .pipe(gulp.dest('public/assets/scripts/'))
});

gulp.task('public', function() {
  return gulp.src(build.public)
    .pipe(coffee({bare: true}))
    /*.pipe(concat('scripts.js'))
    .pipe(minifyjs())*/
    .pipe(gulp.dest('public/'));
});

gulp.task('server', function() {
  return gulp.src(build.server)
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('server/'));
});

gulp.task('test', function() {
  return gulp.src(build.test)
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('test/'));
});

gulp.task('assets', ['styles', 'public', 'server', 'test']);

/* e2e test*/
/*gulp.task('webdriver_update', $.protractor.webdriver_update);
gulp.task('connect', function () {
  var connect = require('connect');
  var app = connect().use(connect.static('src'));
  $.server = require('http').createServer(app).listen(8000);
});
gulp.task('karma', function (done) {
    var karma = require('karma').server;
    var karmaConf = require('./karma.conf.js')();
    karma.start(karmaConf, done);
});
gulp.task('e2e', ['connect', 'webdriver_update'], function (done) {
  gulp.src(['test/e2e/!*.js'])
    .pipe($.protractor.protractor({
      configFile: './protractor.conf.js',
    }))
    .on('end', function () {
      $.server.close();
        done();
    });
});
gulp.task('testing', ['webdriver_update', 'connect', 'karma', 'e2e']);*/

/* server */
var paths = {
  client: [
    'public/views/*.jade',
    'public/assets/scripts/*.js',
    'public/assets/styles/*.css'
  ],
  server: {
    index: 'server.js'
  }
};

var nodemonConfig = {
  script : paths.server.index,
  ignore : [
  ],
  env    : {
  }
};

gulp.task('nodemon', ['livereload'], function() {
  return nodemon(nodemonConfig);
});

/* livereload */
gulp.task('livereload', function() {
  gulp.watch(build.styles, ['styles']);
  gulp.watch(build.public, ['public']);
  gulp.watch(build.server, ['server']);
  gulp.watch(build.test, ['test']);
  gulp.watch(paths.client, function(e) {
    server.changed(e.path);
  });
});


gulp.task('default', ['assets', 'nodemon', 'livereload']);