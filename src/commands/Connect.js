import Output from '../output'
import Prompt from '../prompt'
import Command from '../command'

const availableCommands = [];
Object.keys(Command.commands).forEach(cmd => {
    if (!Command.commands[cmd].buyable && Command.commands[cmd].scope.includes('distant')) availableCommands.push(cmd);
});

export default (state, params) => {
    let server = state.networks.filter(s => s.ip == params[0])[0];

    if(!server) {
        state.logs.push(Output.error(state.user, `The network ${params[0]} is unreachable. Use the 'scan' command to see all the networks around you`));
        return false;
    }

    if(!server.hacked && server.security > 0) {
        state.prompt = new Prompt('serverConnect', server);
        state.logs.push(Output.simple(state.user, `A password is required to connect to ${server.ip}, please enter the password:`));
        return false;
    }

    state.availableCommands = availableCommands;
    state.user.isDistant = true;
    state.user.distant.host = server.ip;
    state.logs.push(Output.success(state.user, `You are now connected to the network ${server.ip} as root user`));
}