(function () {
    'use strict';

    //var autoPrefixer = require('gulp-autoprefixer');
    var clean = require('gulp-clean');
    var concat = require('gulp-concat');
    var gulp = require('gulp');
    var imagemin = require('gulp-imagemin');
    var inject = require('gulp-inject');
    var jshint = require('gulp-jshint');
    var livereload = require('gulp-livereload');
    var minifyCSS = require('gulp-minify-css');
    var minifyHTML = require('gulp-minify-html');
    var ngAnnotate = require('gulp-ng-annotate');
    var plumber = require('gulp-plumber');
    var replace = require('gulp-replace');
    var sass = require('gulp-ruby-sass');
    var stylish = require('jshint-stylish');
    var templateCache = require('gulp-angular-templatecache');
    var uglify = require('gulp-uglify');
    var using = require('gulp-using');

    /**
     * Define third-party CSS and JS dependencies.
     * These will be injected into index.html in the given order.
     */
    var dependencies = {
        css: [

        ],
        fonts: [

        ],
        js: [
            'angular/angular.js',
            'angular-animate/angular-animate.js',
            'angular-resource/angular-resource.js',
            'ui-router/release/angular-ui-router.js'
        ]
    };

    /**
     * Configure project paths.
     * Paths are always strings.
     */
    var paths = {
        base: './',
        bower: './bower_components/',
        client: {
            base: './client/',
            build: {
                base: './client/build/',
                assets: {
                    base: './client/build/assets/',
                    images: './client/build/assets/images/',
                    fonts: './client/build/assets/fonts/'
                },
                css: {
                    base: './client/build/css/',
                    app: './client/build/css/app/',
                    vendor: './client/build/css/vendor/'
                },
                js: {
                    base: './client/build/js/',
                    app: './client/build/js/app/',
                    vendor: './client/build/js/vendor/'
                }
            },
            dist: {
                base: './client/dist/',
                assets: {
                    base: './client/dist/assets/',
                    images: './client/dist/assets/images/'
                },
                css: {
                    base: './client/dist/'
                },
                js: {
                    base: './client/dist/'
                }
            },
            src: {
                base: './client/src/',
                assets: {
                    base: './client/src/assets/'
                },
                scss: {
                    base: './client/src/scss/'
                }
            }
        },
        server: {
            base: './server/'
        }
    };

    /**
     * Configure file patterns.
     * File patters are always arrays.
     */
    var files = {
        all: [
            '*'
        ],
        assets: {
            all: [
                '**/*'
            ],
            images: [
                'images/**/*'
            ]
        },
        css: {
            all: [
                '**/*.css'
            ],
            vendor: dependencies.css
        },
        fonts: {
            vendor: dependencies.fonts
        },
        html: {
            all: [
                '**/*.html'
            ]
        },
        js: {
            all: [
                '**/*.js'
            ],
            /**
             * Define the order in which app js files are injected into index.html
             */
            app: [
                '**/*.module.js',
                '**/*.config.js',
                '**/*.directive.js',
                '**/*.js'
            ],
            unitTest: [
                // Match all unit test .spec.js files in any subdirectory
                '**/*.spec.js'
            ],
            // Manually-defined vendor .js files
            vendor: dependencies.js
        },
        json: {
            all: [
                // Match all .json files in any subdirectory
                '**/*.json'
            ]
        },
        scss: {
            all: [
                // Match all .scss files in any subdirectory
                '**/*.scss'
            ]
        },
        dist: {
            css: [
                'styles.min.css'
            ],
            js: [
                'app.min.js'
            ]
        },

        /**
         * Gulp configuration file.
         */
        gulpfile: ['gulpfile.js'],

        /**
         * Application entry point.
         */
        index: ['index.html'],

        /**
         * Karma configuration file.
         */
        karma: ['karma.conf.js']
    };

    /**
     * Config
     */
    var config = {
        angular: {
            module: 'poprevo'
        }
    };

    gulp.task('default', [
        'build',
        'watch'
    ], function() {

    });

    gulp.task('build', [
        'clean:build',
        'compileSASS',
        'copyAppJS',
        'minifyImages',
        //'copyAssets',
        'copyFavicon',
        'copyIndex',
        'copyVendorCSS',
        'copyVendorJS',
        'html2js',
        'injectVendor',
        'injectApp',
        'jshint'
    ], function() {

    });

    gulp.task('watch', ['build'], function () {
        livereload.listen();

        gulp.watch(files.gulpfile, ['build']);
        gulp.watch(prefixPath(paths.client.src.base, files.js.all), ['build']);
        gulp.watch(prefixPath(paths.client.src.base, files.scss.all), ['build']);
        gulp.watch(prefixPath(paths.client.src.base, files.html.all), ['build']);
        gulp.watch(prefixPath(paths.client.src.assets.base, files.assets.all), ['build']);
    });

    gulp.task('dist', [
        'clean:build',
        'clean:dist',
        'build',
        'distCopyAssets',
        'distCopyIndex',
        'distCSS',
        'distJS',
        'distInject',
        'distMinifyIndex'
    ], function () {

    });

    /**
     * Remove all files in build dir
     */
    gulp.task('clean:build', function () {
        return gulp.src([paths.client.build.base + files.all], {read: false})
            .pipe(clean());
    });

    /**
     * Remove all files in dist dir
     */
    gulp.task('clean:dist', function () {
        return gulp.src([paths.client.dist.base + files.all], {read: false})
            .pipe(clean());
    });

    /**
     * Copy assets to dist dir
     */
    gulp.task('distCopyAssets', ['build'], function () {
        console.log(prefixPath(paths.client.build.assets.base, files.all));
        return gulp.src(prefixPath(paths.client.build.assets.base, files.assets.all))
            .pipe(gulp.dest(paths.client.dist.assets.base));
    });

    /**
     * Copy index.html to dist dir
     */
    gulp.task('distCopyIndex', ['build'], function () {
        return gulp.src(paths.client.src.base + files.index)
            .pipe(gulp.dest(paths.client.dist.base));
    });

    /**
     * Concatenate and minify vendor and app CSS.
     * Place concatenated file in dist dir
     */
    gulp.task('distCSS', ['build'], function () {
        var sources = {
            app: [paths.client.build.css.app + files.css.all],
            vendor: prefixPath(paths.client.build.css.vendor, files.css.vendor)
        };

        return gulp.src(sources.vendor.concat(sources.app))
            .pipe(plumber())
            .pipe(concat(files.dist.css[0]))
            .pipe(minifyCSS())
            .pipe(gulp.dest(paths.client.dist.base));
    });

    /**
     * Annotate, concatenate and minify vendor and app JS
     * Place concatenated file in dist dir
     */
    gulp.task('distJS', ['build'], function () {
        var sources = {
            app: prefixPath(paths.client.build.js.app, files.js.app),
            vendor: prefixPath(paths.client.build.js.vendor, files.js.vendor)
        };

        return gulp.src(sources.vendor.concat(sources.app))
            .pipe(ngAnnotate({add: true, single_quotes: true}))
            .pipe(concat(files.dist.js[0]))
            .pipe(uglify())
            .pipe(gulp.dest(paths.client.dist.base));
    });



    /**
     * Inject CSS and JS files into index.html in dist dir
     */
    gulp.task('distInject', ['distCopyIndex', 'distCSS', 'distJS'], function () {
        var sources = {
            css: [paths.client.dist.base + files.dist.css],
            index: [paths.client.dist.base + files.index],
            js: [paths.client.dist.base + files.dist.js]
        };

        return gulp.src(sources.index)
            .pipe(using())
            .pipe(inject(gulp.src(sources.js, {read:false}), {name: 'app', relative:true}))
            .pipe(inject(gulp.src(sources.css, {read:false}), {name: 'app', relative:true}))
            .pipe(gulp.dest(paths.client.dist.base));
    });

    /**
     * Minify index.html in dist dir
     */
    gulp.task('distMinifyIndex', ['distInject'], function () {
        return gulp.src([paths.client.dist.base + files.index])
            .pipe(minifyHTML({empty: true}))
            .pipe(gulp.dest(paths.client.dist.base));
    });

    /**
     * Compile SASS to CSS and place in build dir
     */
    gulp.task('compileSASS', ['clean:build'], function () {
        var sources = {
            ignore: [],
            scss: [paths.client.src.base + files.scss.all]
        };

        return gulp.src(sources.ignore.concat(sources.scss))
            .pipe(plumber())
            .pipe(sass({style: 'expanded'}))
            //.pipe(autoPrefixer('last 2 version'))
            .pipe(gulp.dest(paths.client.build.css.app));
    });

    /**
     * Copy app JS to build dir
     */
    gulp.task('copyAppJS', ['clean:build', 'jshint'], function () {
        var sources = {
            js: prefixPath(paths.client.src.base, files.js.app),
            ignore: ['!' + paths.client.src.base + files.js.unitTest]
        };

        return gulp.src(sources.js.concat(sources.ignore))
            .pipe(gulp.dest(paths.client.build.js.app));
    });

    /**
     * Copy assets to build dir
     */
    gulp.task('copyAssets', ['clean:build'], function () {
        return gulp.src([paths.client.src.assets.base + files.assets.all])
            .pipe(gulp.dest(paths.client.build.assets.base));
    });

    gulp.task('minifyImages', ['clean:build'], function() {
        return gulp.src([paths.client.src.assets.base + files.assets.images])
            .pipe(imagemin())
            .pipe(gulp.dest(paths.client.build.assets.images));
    });

    /**
     * Copy index.html to build dir
     */
    gulp.task('copyIndex', ['clean:build'], function () {
        return gulp.src(paths.client.src.base + files.index)
            .pipe(gulp.dest(paths.client.build.base));
    });

    gulp.task('copyFavicon', ['clean:build'], function() {
        return gulp.src(['favicon.ico'])
            .pipe(gulp.dest(paths.client.build.base));
    });

    /**
     * Copy vendor CSS to build dir
     */
    gulp.task('copyVendorCSS', ['clean:build'], function () {
        var sources = prefixPath(paths.bower, files.css.vendor);

        return gulp.src(sources, {base: paths.bower})
            .pipe(replace('../fonts/', '../../../../../../assets/fonts/'))
            .pipe(gulp.dest(paths.client.build.css.vendor));
    });

    /**
     * Copy vendor JS to build dir
     */
    gulp.task('copyVendorJS', ['clean:build'], function () {
        var sources = prefixPath(paths.bower, files.js.vendor);

        return gulp.src(sources, {base: paths.bower})
            .pipe(gulp.dest(paths.client.build.js.vendor));
    });

    /**
     * Concatenate the contents of all .html files and save as template.js
     */
    gulp.task('html2js', ['clean:build'], function () {
        var sources = {
            html: [paths.client.src.base + files.html.all],
            ignore: ['!' + paths.client.src.base + files.index]
        };

        return gulp.src(sources.html.concat(sources.ignore))
            .pipe(templateCache(config.angular.module + '.templates.js', {
                module: config.angular.module + '.templates',
                standalone: true
            }))
            .pipe(gulp.dest(paths.client.build.js.app + 'templates/'));
    });

    /**
     * Inject vendor CSS and JS into index.html in build dir
     */
    gulp.task('injectVendor', ['copyIndex', 'copyVendorJS', 'copyAppJS', 'copyVendorCSS', 'compileSASS'], function () {
        var sources = {
            js: prefixPath(paths.client.build.js.vendor, files.js.vendor),
            css: prefixPath(paths.client.build.css.vendor, files.css.vendor)
        };

        return gulp.src(paths.client.build.base + files.index)
            .pipe(inject(gulp.src(sources.js, {read: false}), {name: 'vendor', relative: true}))
            .pipe(inject(gulp.src(sources.css, {read: false}), {name: 'vendor', relative: true}))
            .pipe(gulp.dest(paths.client.build.base));
    });

    /**
     * Inject app CSS and JS into index.html in build dir
     */
    gulp.task('injectApp', ['injectVendor'], function () {
        var sources = {
            css: [paths.client.build.css.app + files.css.all],
            js: prefixPath(paths.client.build.js.app, files.js.app)
        };

        return gulp.src(paths.client.build.base + files.index)
            .pipe(inject(gulp.src(sources.js, {read: false}), {name: 'app', relative: true}))
            .pipe(inject(gulp.src(sources.css, {read: false}), {name: 'app', relative: true}))
            .pipe(gulp.dest(paths.client.build.base))
            .pipe(livereload());
    });

    /**
     * jshint app JS
     */
    gulp.task('jshint', function () {
        var sources = {
            gulpfile: files.gulpfile,
            ignore: [],
            js: prefixPath(paths.client.src.base, files.js.app),
            karma: files.karma
        };

        return gulp.src(sources.js.concat(sources.gulpfile).concat(sources.karma).concat(sources.ignore))
            .pipe(plumber())
            .pipe(jshint())
            .pipe(jshint.reporter(stylish));
    });


    /**
     * Prefix path to an array of files
     * @param path
     * @param files
     * @returns {Array}
     */
    function prefixPath(path, files) {
        var result = [];

        for (var i = 0; i < files.length; i++) {
            result[i] = path + files[i];
        }

        return result;
    }
})();