const babel = require( 'rollup-plugin-babel' )

module.exports = {
    input: 'index.js',
    output: {
        file: 'lib/duck-wizard.js',
        format: 'umd'
    },
    plugins: [babel( { runtimeHelpers: true } )]
}
