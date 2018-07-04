import Output from './output'

export default class Prompt {
    constructor(action, data = {}) {
        this.success = false;
        this.command = '';
        this.params = [];
        this.action = action;
        this.data = data;
    }

    execute(state, value) {
        return this[this.action](state, value);
    }

    serverConnect(state, value) {
        if(value !== this.data.password) {
            state.logs.push(Output.error(state.user, `Wrong password, the connection to the server ${this.data.ip} is now closed.`));
            return false;
        }

        this.success = true;
        this.command = 'connect';
        this.params = [this.data.ip];

        const index = state.networks.findIndex(s => s.ip === this.data.ip);
        state.networks[index].hacked = true;
    }
}

