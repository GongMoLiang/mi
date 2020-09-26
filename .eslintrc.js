module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'prettier'],
	parser: 'babel-eslint',
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		strict: 'off',
		'no-console': 'off'
	}
}
