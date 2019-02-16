import fs from 'fs'
import path from 'path'
import inquirer from 'inquirer'
import { CONF_FILE_EXTENSION, CONF_FILE_NAME } from './constants'

export const getCurrentDirectoryBase = () => {
    return path.basename( process.cwd() )
}

export const directoryExists = filePath => {
    try {
        return fs.statSync( filePath ).isDirectory()
    } catch ( err ) {
        return false
    }
}
export const checkInit = async () => {
    if ( !fs.exists( CONF_FILE_NAME + CONF_FILE_EXTENSION ) ) {
        const questions = [
            {
                name: 'srcDirectory',
                message: 'Src directory?',
                default: 'src'
            },
            {
                name: 'modulesDirectory',
                message: 'Modules directory?',
                default: 'modules'
            }
        ]
        const answers = await inquirer.prompt( questions )
        console.log( answers )
        fs.writeFile( CONF_FILE_NAME + CONF_FILE_EXTENSION, JSON.stringify( answers ), writeEnd )
    } else {
        console.log( 'Project already configured' )
        return Promise.resolve()
    }
}

const writeEnd = err => {
    if ( err ) {
        console.log( 'There has been an error saving your configuration data.' )
        console.log( err.message )
        return
    }
    console.log( 'Configuration saved successfully.' )
    return Promise.resolve()
}
