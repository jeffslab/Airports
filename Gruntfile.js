/**
    * @description 部署配置
    * @author yuhao@taobao.com
 **/

//var ENV_PATH = 'http://g.tbcdn.cn/mm/tesla-project/1.0.10/';
var ENV_PATH = 'http://g.assets.daily.taobao.net/mm/tesla-project/1.0.11/';
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
                    'public/js/jade-template.js' : 'views/tmpl/*.jade'
                }
            },
            compileResourceChangeProject : {
                options : {
                    client : true
                },
                files : {
                    'public/js/jade-templateWithResourceChangeProject.js' : ['views/tmpl/wrc/*.jade', 'views/tmpl/mixins-aliIcon.jade', 'views/tmpl/mixins.jade']
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
                    //线上发布一个build/api/tesla-api-resource.js的文件，不需压缩，以便线上问题转发调试
                    src: ['**/*.js', '!api/tesla-api-resource.js', '!api/jaguarjs-jsdoc/**/*.js'],
                    dest: 'build'
                    //ext: '.min.js'
                }]
            },
            'minify-api': {
                files: [{
                    expand: true,
                    cwd: 'build',
                    src: ['api/tesla-api.js'],
                    dest: 'build',
                    ext: '-min.js'
                }]
            }
        },
        jsdoc: {
            dist: {
                cwd: '.',
                src: ['api/tesla-api.js', 'api/data/tmplData.js'],
                options: {
                    destination: 'build/doc',
                    debug: true,
                    //encoding: 'gb2312',
                    'private': false,
                    //version: false,
                    template: 'api/jaguarjs-jsdoc',
                    configure: 'api/jaguarjs-jsdoc/conf.json'
                }
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
                    src: ['api/test/index.html', 'api/test/index-women-channel.html'],
                    dest: 'build'
                }]
            },
            css: {
                options: {
                    process: function (content, srcpath) {
                            return content;
                    },
                    noProcess: ['**/*.{css,jpg,png,gif}']
                },
                files: [{
                    expand: true,
                    cwd: 'public',
                    src: ['css/modules.css', 'css/creative-iframe.css'],
                    dest: 'build'
                }]
            },
            jsJade: {
                options: {
                    noProcess: ['**/*.{css,jpg,png,gif}']
                },
                files: [{
                    expand: true,
                    cwd: 'public',
                    src: ['js/jade-*.js'],
                    dest: 'build'
                }]
            },
            jsApi: {
                options: {
                    process: function (content, srcpath) {
                        if (/tesla\-api\.js/g.test(srcpath)) {
                            console.warn('\033[32;32m [正在替换环境变量，加载路径]：\033[0m', srcpath, ' 为 ', ENV_PATH);
                            content = content.replace(/(var\s+ENV_PATH\s*=).*/gi, '$1 "' + ENV_PATH + '"');
                            //console.warn(content);
                            return content;
                        }
                        return content;
                    },
                    noProcess: ['**/*.{css,jpg,png,gif}']
                },
                files: [{
                    expand: true,
                    cwd: '.',
                    src: ['api/tesla-api.js', 'api/data/*.js'],
                    dest: 'build'
                }]
            },
            jsApiResourceCode: {
                options: {
                    process: function (content, srcpath) {
                        console.warn('\033[32;32m [正在替换环境变量，加载路径]：\033[0m', srcpath, ' 为 ', ENV_PATH);
                        content = content.replace(/(var\s+ENV_PATH\s*=).*/gi, '$1 "' + ENV_PATH + '"');
                        return content;
                    }
                },
                files: [{
                    expand: true,
                    cwd: '.',
                    src: ['api/tesla-api.js'],
                    dest: 'build',
                    ext: '-resource.js'
                }]
            }
        },
        jshint: {
            main: {
                files: {
                    src: ['**/*.js', '!api/jaguarjs-jsdoc/**/*.js', '!build/**/*.js', '!public/js/*.js', '!node_modules/**/*.js', '!build/**/*.min.js']
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
            },
            jsdoc: {
                src: ['build/doc']
            }
        },
        cssmin: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            minify: {
                expand: true,
                cwd: 'build/public/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'build/public/css'
                //ext: '.min.css'
            }
        },
        connect: {
            server: {
                options: {
                    hostname: HOSTNAME,
                    port: SERVER_PORT,
                    base: 'src',
                    livereload: LIVERELOAD_PORT
                }
            }
        },
        watch: {
            less: {
                files: ['**/*.less', '!**/*.css'],
                tasks: ['less:watch']
            },
            tmpl: {
                files: ['**/*.tmpl']
            },
            options: {
                livereload: LIVERELOAD_PORT,
                spawn: true
            }
        },
        less: {
            options: {
                compress: true
            },
            watch: {
                files: [{
                    cwd: 'src/',
                    expand: true,
                    src: '**/*.less',
                    dest: 'src',
                    ext: '.less.css'
                }]
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
    grunt.registerTask('pro', ['clean', 'jshint', 'jade', 'copy', 'cssmin', 'uglify', 'jsdoc']);
    grunt.registerTask('daily', ['clean', 'jshint', 'jade', 'copy', 'cssmin']);
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('doc', ['clean:jsdoc', 'jsdoc']);
    grunt.registerTask('default', ['jade', 'copy']);
};
