module.exports = grunt => {
  'use strict';
  grunt.loadNpmTasks('grunt-contrib-copy');

  return {
    setup: {
      files: [
        {
          expand: true,
          cwd: './src/',
          src: ['index.html', 'manifest.json', 'img/**/*'],
          dest: './public/'
        }
      ]
    }
  };
};
