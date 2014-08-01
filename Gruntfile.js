module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean : ["bin"],
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
        files: {
          'bin/config.min.js' : ['src/InspectElementConfig.js'],
          'bin/injector.min.js' : ['src/PipePage.js', 'src/InspectElement.js', 'src/injector.js']
        }
      }
    },
    replace: {
      injectScript: {
        src: ['src/*'],
        dest : 'bin/',
        replacements: [{
          from: /\/\/#injector\.min\.js#/g,
          to: "<%= grunt.file.read('bin/injector.min.js') %>"
        },
        {
          from: /\/\/#config\.min\.js#/g,
          to: "<%= grunt.file.read('bin/config.min.js') %>"
        }]
      }
    },
    exec: {
      'pack-extension': 'cmd /C build.bat'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['clean', 'uglify', 'replace', 'exec']);

};