const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );
module.exports = {
	...defaultConfig,
	entry: {
		index: './wp-content/themes/wp-boilerplate/src/index.js',
		editor: './wp-content/themes/wp-boilerplate/src/editor.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(
			process.cwd(),
			'wp-content/themes/wp-boilerplate/build'
		),
	},
};
