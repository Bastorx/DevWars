var envify = require('envify');

module.exports = function(grunt) {

  grunt.initConfig({
    //CONCURRENT
    concurrent: {
      dev: {
        tasks: ['sass', 'watchify', 'watch:dev', 'nodemon:dev'],
        options: {
          logConcurrentOutput: true,
          limit: 4
        },
      },
      prod: {
        options: {
          limit: 1
        },
        tasks: ['sass', 'browserify', 'uglify', 'cssmin', 'nodemon:prod']
      },
      full: {
        tasks: ['sass', 'browserify', 'watchify', 'cssmin', 'nodemon:full', 'watch:full'],
        options: {
          logConcurrentOutput: true,
          limit: 1
        }
      },
      build: {
        options: {
          limit: 1
        },
        tasks: ['sass', 'browserify', 'uglify', 'cssmin']
      },
    },
    //END

    //SASS
    sass: {
      dist: {
        options: {
          update: true,
          style: 'compressed'
        },
        files: {
          'public/css/style.css': 'public/scss/style.scss'
        },
      }
    },
    //END

    //MINIFYCSS
    cssmin: {
      target: {
        files: {
          'public/css/style.min.css': ['public/css/style.css']
        }
      }
    },
    //END

    //BEGIN NODEMON
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          env: {
            NODE_ENV: 'development'
          },
          nodeArgs: ['--debug'],
          // omit this property if you aren't serving HTML files and  
          // don't want to open a browser tab on start 
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });
     
            // refreshes browser when server reboots 
            nodemon.on('restart', function () {
              // Delay before server listens on port 
              setTimeout(function() {
                require('fs').writeFileSync('.rebooted', 'rebooted');
              }, 1000);
            });
          }
        }
      },
      full: {
        script: 'server.js',
        options: {
          env: {
            NODE_ENV: 'full'
          },
          nodeArgs: ['--debug'],
          // omit this property if you aren't serving HTML files and  
          // don't want to open a browser tab on start 
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });
     
            // refreshes browser when server reboots 
            nodemon.on('restart', function () {
              // Delay before server listens on port 
              setTimeout(function() {
                require('fs').writeFileSync('.rebooted', 'rebooted');
              }, 1000);
            });
          }
        }
      },
      prod: {
        script: 'server.js',
        options: {
          env: {
            NODE_ENV: 'production'
          }
        }
      },
    },
    //END NODEMON

    //WATCH
    watch: {
      dev: {
        files: 'public/scss/**/*.scss',
        tasks: ['sass']
      },
      livereload: {
        files: ['public/css/style.css'],
        options: {
          livereload: true,
          debounceDelay: 500,
        }
      },
      full: {
        files: 'public/scss/**/*.scss',
        tasks: ['sass', 'cssmin']
      },
      livereload: {
        files: ['public/css/style.css'],
        options: {
          livereload: true,
          debounceDelay: 500,
        }
      }   
    },

    //WATCHIFY
    watchify: {
      options: {
        keepalive: true,
        callback: function(b) {
          b.transform(require('grunt-react').browserify);
          return b;
        }
      },
      client: {
        src: [
          './client.js',
          './app.js',
          './configs/**/*.js',
          './services/**/*.js',
          './lib/**/*.js',
          './stores/**/*.js',
          './actions/**/*.js',
          './components/**/*.jsx',
          './components/*.jsx'
        ],
        dest: 'public/build/js/app.js'
      }
    },

    //UGLIFY
    uglify: {
      build: {
        src: 'public/build/js/app.js',
        dest: 'public/build/js/app.min.js'
      }
    },

    //Browserify
    browserify: {
      options: {
        transform: [
          require('grunt-react').browserify,
          envify
        ]
      },
      client: {
        src: 'client.js',
        dest: 'public/build/js/app.js'
      }
    }
    //END
  });

  // Import du package
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-watchify');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Redéfinition de la tâche `default` qui est la tâche lancée dès que vous lancez Grunt sans rien spécifier.
  // Note : ici, nous définissons sass comme une tâche à lancer si on lance la tâche `default`.
  grunt.registerTask('default', ['concurrent:build']);
  grunt.registerTask('build', ['concurrent:build']);
  grunt.registerTask('dev', ['concurrent:dev']);
  grunt.registerTask('prod', ['concurrent:prod']);
  grunt.registerTask('full', ['concurrent:full']);
}
