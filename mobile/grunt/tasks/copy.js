module.exports = {
	main: {
		files: [{
				expand: true,
				cwd: '../',
				src: ['js/**/*.js', 'css/*.css', 'img/**','*.html'],
				dest: '../dist'
			}
		]
	}
};