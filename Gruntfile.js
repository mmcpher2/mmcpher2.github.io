

module.exports = function(grunt) {
    
        // Project configuration.
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            watch: {
                scripts: {
                  files: ['scripts/*.js'],
                  tasks: ['uglify','eslint'],
                  options: {
                    spawn: false,
                  },
                }
            },
            eslint: {
                  all: ['blog/scripts.js','contact/scripts.js','resume/scripts.js','admin/scripts.js','projects/scripts.js']
                },
            // browserify: {
            //     dist: {
            //         files: 
            //             {
            //             'build/module.js': ['build/*.js']
            //             },
            //         }
            //     },
            uglify: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                build: {
                    files: [{
                        expand: true,
                        cwd: 'blog/scripts',
                        src: '*.js',
                        dest: 'build',
                        ext: '.min.js'
                    },
                    {
                        expand: true,
                        cwd: 'resume/scripts',
                        src: '*.js',
                        dest: 'build',
                        ext: '.min.js'
                    },
                    {
                        expand: true,
                        cwd: 'contact/scripts',
                        src: '*.js',
                        dest: 'build',
                        ext: '.min.js'
                    },
                    {
                        expand: true,
                        cwd: 'admin/scripts',
                        src: '*.js',
                        dest: 'build',
                        ext: '.min.js'
                    },
                    {
                        expand: true,
                        cwd: 'projects/scripts',
                        src: '*.js',
                        dest: 'build',
                        ext: '.min.js'
                    }]
                }
            }
        });
    
        // Load the plugin that provides the "uglify" task.
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');
        
        // Load the ESLint task.
        grunt.loadNpmTasks('eslint-grunt');

        // Load the Browserify
        // grunt.loadNpmTasks('grunt-browserify');
    
        // Default task(s).
        grunt.registerTask('default', ['uglify', 'watch', 'eslint']);
    };