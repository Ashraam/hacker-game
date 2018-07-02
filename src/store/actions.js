import Command from '../command'
import Output from '../output'

export default {
    executeCommand({ commit, state }, cmd) {
        Command.init(cmd, state.availableCommands, state.user.isLogged);

        if (Command.error) {
            commit('print', Output.error(state.user, Command.output));
            return false;
        }

        commit('print', Output.command(state.user, cmd));
        if(Command.name !== "login") {
            commit('history', cmd);
        }
        commit(Command.name, Command.params);
    }
}