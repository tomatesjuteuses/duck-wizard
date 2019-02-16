import chalk from 'chalk'
import clear from 'clear'
import figlet from 'figlet'
import readline from 'readline'
import * as files from './src/files'
import { CMD, exec } from './src/commands'

const launch = async () => {
    console.log( chalk.green.dim( figlet.textSync( 'Duck wizard', { horizontalLayout: 'full' } ) ) )
    await files.checkInit()

    const rl = readline.createInterface( {
        input: process.stdin,
        output: process.stdout,
        prompt: chalk.black.bgYellow( ' $ DW $ ' ) + ' > '
    } )
    rl.prompt()

    rl.on( 'line', line => {
        const command = exec[line.trim()]
        if ( command ) command( rl )
        else {
            console.log( `Say what? I might have heard '${line.trim()}'` )
            console.log( 'Available commands: ' + Object.values( CMD ).join( ' | ' ) )
        }
        rl.prompt()
    } ).on( 'close', () => {
        console.log( 'Have a great day!' )
        process.exit( 0 )
    } )
}

clear()
launch()
