const babel = require( 'rollup-plugin-babel' )

module.exports = {
    input: 'index-cli.js',
    output: {
        file: 'lib/duck-wizard-cli.js',
        format: 'cjs',
        banner: '#!/usr/bin/env node'
    },
    plugins: [babel( { runtimeHelpers: true } )]
}
