var gulp = require('gulp');

var gulp            = require('gulp'),
    concat          = require('gulp-concat'),
    eslint          = require('gulp-eslint'),
    prefixer        = require('gulp-autoprefixer'),
    filter          = require('gulp-filter'),
    sass            = require('gulp-sass'),
    sourcemaps      = require('gulp-sourcemaps'),
    uglify          = require('gulp-uglify'),
    watch           = require('gulp-watch'),
    mainBowerFiles  = require('main-bower-files'),
    modulizr        = require('gulp-modulizr'),
    modernizr       = require('gulp-modernizr'),
    addSource       = require('gulp-add-src'),
    consolidate     = require('gulp-consolidate'),
    buffer          = require('vinyl-buffer'),
    imagemin        = require('gulp-imagemin'),
    merge           = require('merge-stream'),
    spritesmith     = require('gulp.spritesmith'),
    livereload      = require('gulp-livereload'),
		webpack 				= require('webpack-stream');

var path = {
  source: {
    js: './src/js/*.js',
    scss: './src/scss/*.scss',
    sprites: './public/imgs/clients/*.png',
    vendor: {
      js: './src/vendor/*.js',
      css: [],
      scss: './bower_components/foundation-sites/scss'
    },
  },
  build: {
    js: {
      dev: 'main.js',
      release: 'main.min.js'
    },
    css: {
      dev: 'main.css',
      release: 'main.min.css'
    }
  },
  destination: {
    js: './public/js',
    css: './public/css',
    sprites: './public/imgs',
  }
}

gulp.task('sprites', function() {
  var spriteData = gulp.src(path.source.sprites)
    .pipe(spritesmith({
      imgName: '../imgs/sprite.png',
      cssName: '_sprite.scss',
      // retinaSrcFilter: ['./public/imgs/clients/*@2x.png'],
      // retinaImgName: '../imgs/sprite@2x.png',
      padding: 10,
    }));

  var imgStream = spriteData.img
  .pipe(buffer())
  .pipe(imagemin())
  .pipe(gulp.dest(path.destination.sprites));

  var cssStream = spriteData.css
    .pipe(gulp.dest('./src/scss/mixins/'));

  return merge(imgStream, cssStream);
});

gulp.task('js:webpack', function() {
	return gulp.src('./src/js/app/app.js')
		.pipe(webpack( require('./webpack.config.js') ))
		.pipe(gulp.dest('./src/js/'));
});

// Build JS - DEV
gulp.task('js:dev', function() {
  var jsArray = mainBowerFiles(['**/*.js']) || [];       // add bower dependencied js files
	jsArray.push('./node_modules/google-maps/lib/Google.js');
	jsArray.push('./bower_components/vue/dist/vue.js');
  jsArray.push( path.source.js );                 // add our js files

  // Combine all js files into one super .js file
  gulp.src(jsArray)
    .pipe(filter('*.js'))
    // .pipe(eslint())
    // .pipe(eslint.format())
    .pipe(sourcemaps.init({ debug: true }))
    .pipe(concat(path.build.js.dev))
    .pipe(sourcemaps.write('.', {
      sourceMappingURL: function (file) {
        return file.relative + '.map';
      },
      sourceRoot: function (file) {
        return '../app/';
      }
    }) )
    .pipe(gulp.dest(path.destination.js))
    .pipe(livereload());
});

// Build JS - RELEASE
gulp.task('js:release', function () {
  var jsArray = mainBowerFiles() || [];   // add bower dependencied js files
  // jsArray.push('./bower_components/foundation/js/foundation.js'),
  // jsArray.push('./bower_components/foundation-sites/dist/foundation.js'),
	jsArray.push('./node_modules/google-maps/lib/Google.min.js');
	jsArray.push('./bower_components/vue/dist/vue.min.js');
  jsArray.push( path.source.js );         // add our js files

  // Combine all js files into one super .js file
  gulp.src(jsArray)
    .pipe(filter('*.js'))
    .pipe(uglify()).on('error', function (e) { console.log(e); })
    .pipe(concat(path.build.js.release))
    .pipe(gulp.dest(path.destination.js))
    .pipe(livereload());
});

// Build SASS - DEV
gulp.task('sass:dev', function () {
  var cssArray = mainBowerFiles('**/*.css') || [];
  cssArray.push('./node_modules/normalize.css/normalize.css');
  cssArray.push('./bower_components/slick-carousel/slick/slick-theme.scss');
  // cssArray.push( './bower_components/foundation-sites/dist/foundation.css' );
  // cssArray.push( path.source.vendor.css );     // add our sass files
  cssArray.push( path.source.scss );     // add our sass files

  gulp.src(cssArray)
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: path.source.vendor.scss
    }).on('error', function (e) { console.log(e); }))
    .pipe(concat(path.build.css.dev))
    .pipe(prefixer())
    .pipe(sourcemaps.write('.', {
      sourceMappingURL: function (file) {
        return file.relative + '.map';
      }
    }))
    .pipe(gulp.dest(path.destination.css))
    .pipe(livereload());
});

// Build SASS - RELEASE
gulp.task('sass:release', function () {
  var cssArray = mainBowerFiles(['**/*.css']) || [];
  cssArray.push('./node_modules/normalize.css/normalize.css');
  cssArray.push('./bower_components/slick-carousel/slick/slick-theme.css');
  // cssArray.push( path.source.vendor.css );     // add our sass files
  cssArray.push( path.source.scss );     // add our sass files

  gulp.src( cssArray )
    .pipe(
      sass({
        includePaths: path.source.vendor.scss,
        outputStyle: 'compressed',
      }).on('error', function (e) { console.log(e); }))
      .pipe(concat(path.build.css.release))
      .pipe(prefixer())
      .pipe(gulp.dest( path.destination.css))
      .pipe(livereload());
});

// Watch
gulp.task('watch', function () {
  livereload.listen();
  watch('./src/scss/**/*.scss', function (event, cb) {
    gulp.start('sass:dev');
    gulp.start('sass:release');
  });
  livereload.listen();
  watch('./src/js/**/*.js', function (event, cb) {
    gulp.start('js:dev');
    gulp.start('js:release');
  });
});

gulp.task('default', ['sprites', 'js:webpack', 'js:dev', 'sass:dev', 'js:release', 'sass:release', 'watch']);
//gulp.task('release', []);
