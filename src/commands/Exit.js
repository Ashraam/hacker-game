import Output from '../output'
import Command from '../command'

const availableCommands = [];
Object.keys(Command.commands).forEach(cmd => {
    if (!Command.commands[cmd].buyable && Command.commands[cmd].scope.includes('local')) availableCommands.push(cmd);
});


export default (state) => {
    state.availableCommands = availableCommands;
    state.user.isDistant = false;
    state.logs.push(Output.success(state.user, `You are now disconnected from ${state.user.distant.host}`));
}