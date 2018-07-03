import Output from '../output'

export default (state) => {
    let msg = `Here are all the available commands:<br />`;
    let scope = state.user.isDistant ? 'distant' : 'local';

    state.availableCommands.forEach((cmd) => {
        if (state.commands[cmd] && state.commands[cmd].scope.includes(scope)) {
            msg += `<u>${cmd}</u>: ${state.commands[cmd].description}`;
            if (state.commands[cmd].parameters.length > 0) {
                msg += ` (syntax: ${state.commands[cmd].syntax})`
            }
            msg += `<br />`;
        }
    });

    state.logs.push(Output.simple(state.user, msg));
}