/* jshint ignore:start */

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),
    // Tache JSHINT pour contrôle des fichiers JS
    jshint: {
      options: {
        // Option : chargement du fichier de config .jshintrc
        // propre à jQuery
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      build: ['app/**/*.js']
    },
    // Tache WATCH vérifiant les changements des fichiers JS
    // et appelant la tache JSHINT
    watch: {
      js: {
        files: 'app/**/*.js',
        tasks: ['jshint']
      },
      gruntfile: {
        files: 'Gruntfile.js'
      }
    },
    // Tache BROWSERSYNC synchronisant les navigateurs connectés
    // à l'application
    browserSync: {
      bsFiles: {
        src: [
          'app/**/*.js',
          'app/**/*.css',
          'app/**/*.html'
        ]
      },
      options: {
        watchTask: true,
        server: './app'
      }
    }

    // all of our configuration will go here

  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['browserSync', 'watch']);

};
