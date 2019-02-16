import chalk from 'chalk'
import clear from 'clear'
import figlet from 'figlet'
import inquirer from 'inquirer'
import readline from 'readline'
import * as files from './src/files'

clear()

console.log( chalk.green.dim( figlet.textSync( 'Duck wizard', { horizontalLayout: 'full' } ) ) )
files.checkInit().then( () => {
    const rl = readline.createInterface( {
        input: process.stdin,
        output: process.stdout,
        prompt: chalk.black.bgYellow( ' $ DW $ ' ) + ' > '
    } )
    rl.prompt()

    rl.on( 'line', line => {
        switch ( line.trim() ) {
            case 'hello':
                console.log( 'world!' )
                break
            case 'exit':
                rl.close()
                break
            default:
                console.log( `Say what? I might have heard '${line.trim()}'` )
                break
        }
        rl.prompt()
    } ).on( 'close', () => {
        console.log( 'Have a great day!' )
        process.exit( 0 )
    } )
} )
