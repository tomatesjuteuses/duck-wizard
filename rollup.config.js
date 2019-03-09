const babel = require( 'rollup-plugin-babel' )
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'

module.exports = {
    input: 'index.js',
    output: {
        file: 'lib/duck-wizard.js',
        format: 'cjs',
        banner: '#!/usr/bin/env node'
    },
    plugins: [
        babel( { runtimeHelpers: true } ),
        resolve( {
            only: ['regenerator-runtime', /@babel\/.*/, /node_modules\/.*/],
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        } ),
        commonjs(),
        json()
    ],
    external: ['fs', 'path', 'inquirer']
}
