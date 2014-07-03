module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'src/PipePage.js',
        dest: 'bin/PipePage.min.js'
      }
    },
    replace: {
      test: {
        src: ['src/*'],
        dest : 'bin/',
        replacements: [{
          from: /\/\/#PipePage.min.js#/g,
          to: "<%= grunt.file.read('bin/PipePage.min.js') %>"
        }]
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-text-replace');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify','replace']);

};