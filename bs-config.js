const env = require('./.wp-env.json');
module.exports = {
	proxy: `localhost:${ env.port }`,
	files: [
		`.wp-content/themes/*/build/**/*.*`,
		`./**/*.{jpg,jpeg,gif,png,svg,php}`,
	],
};
