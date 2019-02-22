const babel = require( 'rollup-plugin-babel' )

module.exports = {
    input: 'index.js',
    output: {
        file: 'lib/duck-wizard.js',
        format: 'cjs',
        banner: '#!/usr/bin/env node'
    },
    plugins: [babel( { runtimeHelpers: true } )]
}
