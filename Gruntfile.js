module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'src/*.js', 'test/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
          // more options here if you want to override JSHint defaults
      }
    },
    uglify: {
      build: {
        src: 'src/PipePage.js',
        dest: 'bin/PipePage.min.js'
      }
    },
    replace: {
      injectScript: {
        src: ['src/*'],
        dest : 'bin/',
        replacements: [{
          from: /\/\/#PipePage\.min\.js#/g,
          to: "<%= grunt.file.read('bin/PipePage.min.js') %>"
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-text-replace');

  grunt.registerTask('default', ['jshint', 'uglify', 'replace']);

};