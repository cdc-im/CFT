module.exports = {
    dev: {
        options: {
            paths: ["../less/"],
            sourceMap: true,
            sourceMapFilename: "../css/style.css.map",
            sourceMapBasepath: "../css/",
            cleancss: false
        },
        files: {
            "../css/style.css": "../less/style.less"
        }
    },
    pub: {
        options: {
            paths: ["../less/"],
            cleancss: true
        },
        files: {
            "../css/style.css": "../less/style.less"
        }
    }
};