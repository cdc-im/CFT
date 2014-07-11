module.exports = {
    less: {
        files: '../less/*.less',
        tasks: ['less:dev'],
        options: {
            livereload: true
        }
    },
    js: {
        files: '../js/*.js',
        options: {
            livereload: true
        }
    },
    html: {
        files: '**/*.html',
        options: {
            livereload: true
        }
    },
    img: {
        files: '../sprite/*.png',
        tasks: ['sprite'],
        options: {
            livereload: true
        }
    }
};
