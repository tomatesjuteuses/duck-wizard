const doModules = () => {
    console.log( 'Sorry, this command is not available yet' )
}

const doExit = rl => {
    rl.close()
}

export const CMD = Object.freeze( {
    EXIT: 'exit',
    MODULE: 'module'
} )

export const exec = Object.freeze( {
    [CMD.EXIT]: doExit,
    [CMD.MODULE]: doModules
} )
