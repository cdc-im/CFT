module.exports = {
	sprites: {
		src: '../sprites/*.png',
		destImg: '../img/sprites.png',
		imgPath: '../img/sprites.png',
		destCSS: '../less/sprites.less',
		cssFormat: 'less',
		padding: 0
	},
	// retina: {
	//     src: '../sprites/retina/*.png',
	//     destImg: '../img/sprites-2x.png',
	//     imgPath: '../img/sprites-2x.png',
	//     destCSS: '../less/sprites-2x.less',
	//     cssFormat: 'less',
	//     cssVarMap: function(sprite) {
	//         sprite.name = sprite.name.replace('@', '-');
	//     },
	//     padding: 0
	// }
};
