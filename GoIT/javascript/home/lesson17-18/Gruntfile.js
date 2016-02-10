module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [
            'js/libs/jquery-1.12.0.min.js',
            'js/libs/jquery.customSelect.min.js',
            'js/libs/jquery.jcarousel.min.js',
            'js/src/jcarousel.basic.js',
            'js/src/script.js'
            ],
        dest: 'js/script.main.js'
      }
    },
    uglify: {
      dest: {
        src: ['js/script.main.js'],
        dest: 'js/script.main.min.js'
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
      files: {
        'css/style.min.css': ['css/style.css', 'css/jcarousel.basic.css']
      }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};