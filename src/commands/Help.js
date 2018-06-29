export default (state) => {
    let output = `Here are all the available commands:<br />`;

    state.availableCommands.forEach((cmd) => {
        if (state.commands[cmd]) {
            output += `<u>${cmd}</u>: ${state.commands[cmd].description}`;
            if (state.commands[cmd].parameters.length > 0) {
                output += ` (syntax: ${state.commands[cmd].syntax})`
            }
            output += `<br />`;
        }
    });

    state.logs.push({
        output: output,
        type: 'output'
    });
}