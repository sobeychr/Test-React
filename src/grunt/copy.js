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
                        'index.html',
                        'img/**/*',
                        'json/**/*.txt',
                        'manifest.json'
                    ],
                    dest: './public/'
                }
            ]
        }
    };
};
