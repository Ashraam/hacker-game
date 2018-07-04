import Command from '../command'
import Output from '../output'

export default {
    executeCommand({ commit, state }, cmd) {
        if(state.prompt !== null) {
            state.prompt.execute(state, cmd);

            if(state.prompt.success) {
                commit(state.prompt.command, state.prompt.params);
            }
            state.prompt = null;
            return false;
        }

        Command.init(cmd, state.availableCommands, state.user);

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