/*global module:false*/

module.exports = function (grunt) {
    var open = require('open');

    grunt.registerTask('default', [
        'build'
    ]);

    grunt.registerTask('build', [
        'clean',
        'browserify',
        'copy'
    ]);

    grunt.registerTask('serve', function() {
        var openBrowser = !!grunt.option('open'),
            tasks = [
                'build',
                'connect:server',
                'watch'
            ];

        if (openBrowser) {
            setTimeout(function() {
                open('http://localhost:8000/');
            }, 500);
        }

        grunt.task.run(tasks);
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            options: {
                port: 8000,
                base: 'dist',
                hostname: 'localhost'
            },
            server: {
            }
        },
        copy: {
            main: {
                src: ['src/index.html'],
                dest: 'dist/',
                expand: true,
                flatten:true
            }
        },
        watch: {
            dev: {
                files: [
                    'src/**/*.js',
                    'src/**/*.html'
                ],
                tasks: 'build'
            }
        },
        clean: {
            folder: ['dist']
        },
        browserify: {
            dev: {
                files: {
                    'dist/main.js': [
                        'src/**/*.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
};
