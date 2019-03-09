import * as files from './src/files'
import { isEmpty } from './src/utils'
import { INLINE_OPTIONS } from './src/commands'

const launch = async () => {
    const nbBeforeArgs = 2
    const argv = process.argv.slice( nbBeforeArgs )

    if ( isEmpty( argv ) ) {
        // REVIEW that's ugly
        console.log(
            'These are the available options: \n ' +
                'd-wiz    ' +
                Object.values( INLINE_OPTIONS ).join( '\n          ' )
        )
    }
}

launch()
