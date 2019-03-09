const doModules = () => {
    console.log( 'Sorry, this command is not available yet' )
}

const doExit = rl => {
    rl.close()
}

export const INLINE_OPTIONS = Object.freeze( {
    INIT: 'init',
    MODULE: ['module', 'm'],
    HELP: ['--help', '--h']
} )

export const CMD = Object.freeze( {
    ...INLINE_OPTIONS,
    EXIT: 'exit'
} )

export const exec = Object.freeze( {
    [CMD.EXIT]: doExit,
    [CMD.MODULE]: doModules
} )
