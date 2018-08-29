'use strict';

module.exports = grunt => {
    grunt.loadNpmTasks('grunt-contrib-copy');

    return {
        setup: {
            files: [
                {
                    expand: true,
                    cwd: './src/',
                    src: [
                        'ajax/**/*.php',
                        'index.html',
                        'img/**/*',
                        'json/**/*.json',
                        'php/**/*.php',
                        'manifest.json'
                    ],
                    dest: './public/'
                }
            ]
        }
    };
};
