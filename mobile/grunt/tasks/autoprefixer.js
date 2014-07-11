module.exports = {
    options: {
        browsers: ['last 1 version']
    },
    dist: {
        files: [{
            expand: true,
            cwd: '../dist/css/',
            src: '{,*/}*.css',
            dest: '../dist/css/'
        }]
    }
};