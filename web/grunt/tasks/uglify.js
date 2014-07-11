module.exports = {
    pub: {
        options: {
            mangle: false,
        },
        files: [{
            expand: true,
            cwd: '../js',
            src: '**/*.js',
            dest: '../dist/js'
        }]
    }
};