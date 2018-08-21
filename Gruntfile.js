'use strict';

module.exports = grunt => {
    
    // Loads and sets configs
    const pkg  = grunt.file.readJSON('package.json'),
          copy = require('./src/grunt/copy.js')(grunt);
    
    grunt.config.init({
        pkg: pkg,
        copy: copy
    });
    
    grunt.registerTask('default', function(){
        grunt.task.run(['copy']);
    });
};