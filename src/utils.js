export const isEmpty = value => value.length === 0

export const isCommand = ( value, command ) => {
    if ( command instanceof Array ) return command.includes( value )
    return command === value
}
