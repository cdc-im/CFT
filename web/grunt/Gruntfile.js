var path = require('path');
var cwd = process.cwd();

module.exports = function(grunt) {
	//require('time-grunt')(grunt);
	require('load-grunt-config')(grunt,{
		 configPath: path.join(cwd, 'tasks')
	});

	grunt.registerTask('default', ['sprite','less:dev','connect','watch']);
	grunt.registerTask('pub', ['sprite','newer:imagemin','less:pub','cmq','autoprefixer','newer:uglify','copy','compress']);
};
