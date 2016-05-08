module.exports = function(grunt) {
    //Configure tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), //use pkg properties
        connect:{
        	server: {
        	    options: {
        	        port: 9000,
        	        base:'./',
        	        debug:true,
        	        open: true,
        	        keepalive:true,
        	        //liverload: 35729,
        	        // Change this to '0.0.0.0' to access the server from outside
        	        hostname: '0.0.0.0',

        	    }
        	}
        },

    });
    //load Plugins
    grunt.loadNpmTasks('grunt-contrib-connect');
    //regist task,two arguments,first is task's alias,
    //second is task your configured before in initConfig
    //you can use like 'A:B' to  excute task B in task A
    //what's more, these 2 params can't be the same
    grunt.registerTask('default', ['connect']);

}
