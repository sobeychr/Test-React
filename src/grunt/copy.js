'use strict';

module.exports = grunt => {
    grunt.loadNpmTasks('grunt-contrib-copy');

    return {
        public: {
            files: [
                {
                    expand: true,
                    cwd: './public/',
                    src: ['json/**/*.json'],
                    dest: './src/'
                }
            ]
        },
        setup: {
            files: [
                {
                    expand: true,
                    cwd: './src/',
                    src: [
                        'index.html',
                        'img/**/*',
                        'json/**/*.json',
                        'manifest.json'
                    ],
                    dest: './public/'
                }
            ]
        }
    };
};
