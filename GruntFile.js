module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        files: {
          'build/Messages.min.js': 'CustomLibraries/Messages/Error/ErrorMessages.js'
        }
      }
    },
    'string-replace': {
      dist: {
        files: {
          'dest/': 'src/**',
          'prod/': ['src/*.js', 'src/*.css'],
        },
        options: {
          replacements: [{
            pattern: ',',
            replacement: ';'
          }]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['string-replace'/*, 'uglify'*/]);
};