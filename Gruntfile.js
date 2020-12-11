module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // concat: {
        //     css: {
        //         src: [
        //             '*.css'
        //         ],
        //         dest: 'dist/my-project.css'
        //     },
        //     js: {
        //         src: [
        //             'src/*.js'
        //         ],
        //         dest: 'dist/my-project.js'
        //     }
        // },
        sass: {
                dev: {
                  options: {
                    style: 'compressed'
                  },
                  files: {
                    'css/style.css': 'css/style.scss',
                  }
                }
            },
        processhtml: {
                dev: {
                  files: {
                    'index.html': ['index.html']
                  }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.registerTask('default', ['sass:dev', 'processhtml:dev']);
};
