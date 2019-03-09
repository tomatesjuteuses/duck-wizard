import { isEmpty, isCommand } from './src/utils'
import { INLINE_OPTIONS } from './src/commands'

const launch = () => {
    const nbBeforeArgs = 2
    const argv = process.argv.slice( nbBeforeArgs )

    if ( isEmpty( argv ) || isCommand( argv[0], INLINE_OPTIONS.HELP ) ) {
        help()
        return
    }
}

const help = () => {
    const options = Object.values( INLINE_OPTIONS )
        .map( o => {
            if ( o instanceof Array ) {
                return o.join( ', ' )
            }
            return o
        } )
        .join( '\n          ' )
    // REVIEW that's ugly
    console.log( 'These are the available options: \n ' + 'd-wiz    ' + options )
}

launch()
