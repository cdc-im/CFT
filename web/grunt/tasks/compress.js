module.exports = {
    pub: {
        options: {
            archive: '../dist.zip'
        },
        files: [{
            expand: true,
            cwd: '../dist/',
            src: ['**'],
            filter: 'isFile'
        }]
    }
};