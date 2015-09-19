module.exports = function(grunt){
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-uglify');


grunt.initConfig({
  uglify: {
    my_target: {
      files: {
        'js/main.js' : ['_/components/js/*.js']
      }//files
    }//mytarget
  },//uglify tasks
  compass: {
    dev: {
      options: {
        config: 'config.rb'
      }//options
    }//dev
  },//compass task
  watch:{
    options: {
      livereload: true
    },//options -set here other perks
    scripts :{
      files: ['_/components/js/*.js'],
      tasks: ['uglify']
    },//js tasks
    html: {
      files: ['*.html', 'partials/*.html', 'templates/*.html'],
    },//html tasks
    sass: {
       files: ['_/components/sass/*.scss'],
       tasks: ['compass:dev']
    }//sasswatch task
  }//watch object
})//initConfig

/* register the task that grunt will always run */
grunt.registerTask('default', 'watch');
}//exports
