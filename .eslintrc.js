module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'prettier'],
	parser: 'babel-eslint',
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': 'off',
		strict: 'off',
		'no-console': 'off',
		'no-unused-vars': [2, { vars: 'all', args: 'after-used' }],
		experimentalDecorators: 'off'
	}
}
