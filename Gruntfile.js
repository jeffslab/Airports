/**
    * @description 部署配置
 **/

var HOSTNAME = '0.0.0.0';
var LIVERELOAD_PORT = 9991;
var SERVER_PORT = 9966;

    // load all grunt tasks
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    var jadeFiles = {};
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jade : {
            compile : {
                options : {
                    client : true
                },
                files : {
                    'lib/jade/jade-tmpl.js' : 'template/**/*.jade'
                }
            }
        },
        cache: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                mangle: true
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'build',
                    src: ['**/*.js'],
                    dest: 'build'
                }]
            }
        },
        copy: {
            images: {
                files: [{
                    expand: true,
                    cwd: 'public',
                    src: ['img/**/*'],
                    dest: 'build'
                }]
            },
            html: {
                files: [{
                    expand: true,
                    cwd: '.',
                    src: ['html/*.html'],
                    dest: 'build'
                }]
            },
            css: {
                files: [{
                    expand: true,
                    cwd: '.',
                    src: ['style/**/*.css', 'style/res/*.{svg,ttf,eot,woff}'],
                    dest: 'build'
                }]
            },
            js: {
                options: {
                    noProcess: ['**/*.{css,jpg,png,gif}']
                },
                files: [{
                    expand: true,
                    cwd: '.',
                    src: ['lib/**/*.js'],
                    dest: 'build'
                }]
            }
        },
        jshint: {
            main: {
                files: {
                    src: ['**/*.js', '!lib/zepto*.js', '!lib/jquery*.js', '!lib/bootstrap/**/*.js', '!lib/jade/**/*.js', '!build/**/*.js', '!node_modules/**/*.js', '!bower_components/**/*.js']
                },
                options: {
                    //jshintrc: '.jshintrc',
                    curly: false,
                    eqeqeq: false,
                    immed: false,
                    latedef: false,
                    newcap: false,
                    noarg: true,
                    sub: false,
                    undef: false,
                    unused: false,
                    boss: false,
                    eqnull: false,
                    node: false,
                    es5: false,
                    globals: {
                        jQuery: true,
                        console: false,
                        module: true,
                        document: true
                    }
                }
            }
        },
        clean: {
            build: {
                src: ['build']
            }
        },
        cssmin: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            minify: {
                expand: true,
                cwd: '.',
                src: ['style/*.css'],
                dest: 'build'
                //ext: '.min.css'
            }
        },
        connect: {
            server: {
                options: {
                    hostname: HOSTNAME,
                    port: SERVER_PORT,
                    base: '.',
                    livereload: LIVERELOAD_PORT
                }
            }
        },
        watch: {
            html: {
                files: ['html/*.html']
            },
            jade: {
                files: ['template/**/*.jade'],
                tasks: ['jade']
            },
            css: {
                files: ['style/*.css']
            },
            tmpl: {
                files: ['lib/jade/jade-template.js']
            },
            options: {
                livereload: LIVERELOAD_PORT,
                spawn: true
            }
        },
        open: {
            server: {
                path: 'http://<%= connect.server.options.hostname %>:<%= connect.server.options.port %>/'
            }
        }
    });

    grunt.registerTask('server', function (target) {
        if (target === 'build') {
            grunt.task.run([
                'build',
                'open',
                'connect:server'
            ]);
        }
        grunt.task.run([
            'open',
            'connect:server',
            'watch'
        ]);
    });
    grunt.registerTask('pro', ['clean', 'jshint', 'jade', 'copy', 'cssmin', 'uglify']);
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['jade', 'copy']);
};
