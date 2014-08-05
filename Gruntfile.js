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
      options: {
        compress: {
          // drop_console: true
        }
      },
      build: {
        files: {
          'bin/config.min.js' : ['src/InspectElementConfig.js'],
          'bin/injector.min.js' : ['src/PipePage.js', 'src/InspectElement.js', 'src/injector.js']
        }
      },
      compress: {
        files: {
          'bin/elements-main.js' : ['bin/elements-main.js'],
          'bin/index.js' : ['bin/index.js'],
          'bin/InspectElement.js' : ['bin/InspectElement.js'],
          'bin/PipeDevtool.js' : ['bin/PipeDevtool.js'],
          'bin/PipePage.js' : ['bin/PipePage.js'],
          'bin/tl.ui.AttrTable.js' : ['bin/tl.ui.AttrTable.js'],
          'bin/tl.ui.TreeList.js' : ['bin/tl.ui.TreeList.js']
        }
      }
    },
    replace: {
      injectScript: {
        src: ['src/*.js'],
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
    copy: {
      main: {
        files: [
          {expand: true, cwd:'src/', src: ['*.html', '*.json', '*.png'], dest: 'bin/'}
        ]
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
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['clean', 'uglify:build', 'replace', 'uglify:compress', 'copy', 'exec']);

};