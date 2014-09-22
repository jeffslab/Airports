/**
    * @description 部署配置
 **/

var HOSTNAME = 'localhost';
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
                    'build/views/jade.js' : 'template/**/*.jade'
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
                options: {
                    process: function (content, srcpath) {
                            console.warn('\033[32;32m [正在替换环境变量，加载路径]：\033[0m', srcpath, ' 为 ', ENV_PATH);
                            content = content.replace(/(var\s+ENV_PATH\s*=).*/gi, '$1 "' + ENV_PATH + '"');
                            //console.warn(content);
                            return content;
                    },
                    noProcess: ['**/*.{css,jpg,png,gif}']
                },
                files: [{
                    expand: true,
                    cwd: '.',
                    src: ['html/*.html'],
                    dest: 'build'
                }]
            },
            css: {
                options: {
                },
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
                    src: ['**/*.js', '!build/**/*.js', '!node_modules/**/*.js', '!bower_components/**/*.js']
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
        clean: 'build',
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
                    base: 'html',
                    livereload: LIVERELOAD_PORT
                }
            }
        },
        watch: {
            tmpl: {
                files: ['build/views/jade.js']
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
