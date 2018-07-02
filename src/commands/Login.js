import Command from '../command'
import Output from '../output'

const commandsAfterLoading = [];
Object.keys(Command.commands).forEach(cmd => {
    if (!Command.commands[cmd].buyable) commandsAfterLoading.push(cmd);
});

function simulateLoading(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

export default async (state, payload) => {
    let name = payload[0];

    if (name.length < 3 || name.length > 10) {
        state.logs.push(Output.error(state.user, `The username length must be between 3 and 10 characters`));
        return false;
    }
    state.loading = true;

    //await simulateLoading(1500);

    state.user.local.name = name;
    state.user.isLogged = true;
    state.availableCommands = commandsAfterLoading;
    state.loading = false;

    state.logs.push(Output.success(state.user, `Welcome, you are now logged in as ${name}`));
}