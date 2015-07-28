module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        files: {
          'build/Messages.min.js': 'temp1/CustomLibraries/Messages/Messages.js'
        }
      }
    },
    'string-replace': {
      dist: {
        files: {
          'temp1/': 'CustomLibraries/**'
        },
        options: {
          replacements: [{
            pattern: 'templateUrl',
            replacement: 'template'
          },
          {
            pattern: '/LIB/Messages/ErrorMessages.html',
            replacement: '<style><%= grunt.file.read("CustomLibraries/Messages/Messages.css") %></style><%= grunt.file.read("CustomLibraries/Messages/ErrorMessages.html") %>'
          },
          {
            pattern: '<link rel="stylesheet" type="text/css" href="/LIB/Messages/Messages.css">',
            replacement: ''
          }]
        }
      }
    },
    clean: ["temp1"]
  });

  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['string-replace', 'uglify', 'clean']);
};