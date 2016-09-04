/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.

    watch: {
        pug:{
            files: "views/*.pug",
            tasks: "pug"
        }
    },

    pug: {
        compile: {
            options: {
                pretty: true
            },
            files: {
                'about.html': 'views/about.pug',
                'index.html': 'views/index.pug',
                'contact.html': 'views/contact.pug'
            }
        }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-pug');

  // Default task.
  grunt.registerTask('default', ['pug']);

};
