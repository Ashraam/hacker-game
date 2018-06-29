import Command from '../command'

export default {
    executeCommand({ commit, state }, cmd) {
        Command.init(cmd, state.availableCommands, state.logged);

        if (Command.error) {
            commit('printError', Command.output);
            return false;
        }

        commit('printCommand', cmd);
        commit(Command.name, Command.params);
    }
}