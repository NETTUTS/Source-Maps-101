module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-jsmin-sourcemap');

  grunt.initConfig({
    'jsmin-sourcemap': {
      all: {
        // Source files to concatenate and minify (also accepts a string and minimatch items)
        src: ['scripts/script.js'],

        // Destination for concatenated/minified JavaScript
        dest: 'scripts/script.jsmin-grunt.js',

        // Destination for sourcemap of minified JavaScript
        destMap: 'scripts/script.jsmin-grunt.js.map'

      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'jsmin-sourcemap');

};
