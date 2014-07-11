module.exports = {
    pub: {
        options: {
            optimizationLevel: 3
        },
        files: [{
            expand: true,
            src: ['../dist/img/**/*.{png,jpg,gif}']
        }]
    }
};