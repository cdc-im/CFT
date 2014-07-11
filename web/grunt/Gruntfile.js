var path = require('path');
var cwd = process.cwd();
 
module.exports = function(grunt) {
	require('time-grunt')(grunt);
	require('load-grunt-config')(grunt,{
		 configPath: path.join(cwd, 'tasks')
	});
};