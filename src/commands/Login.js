import Command from '../command'

const commandsAfterLoading = [];
Object.keys(Command.commands).forEach(cmd => {
    if (!Command.commands[cmd].buyable) commandsAfterLoading.push(cmd);
});

export default (state, payload) => {
    let name = payload[0];

    if (name.length < 3 || name.length > 10) {
        state.logs.push({
            output: `The username length must be between 3 and 10 characters`,
            type: 'error'
        });
        return false;
    }

    state.username = name;
    state.logged = true;
    state.availableCommands = commandsAfterLoading;

    state.logs.push({
        output: `Welcome, you are now logged in as ${name}`,
        type: 'success'
    });
}