import commands from './commandList'

const Commands = {
    name: '',
    params: [],
    commands,
    error: false,
    output: '',

    init(str, availableCommands, user) {
        let logged = user.isLogged;
        let scope = user.isDistant ? 'distant' : 'local';
        let split = str.trim().split(' ');
        let cmd = split[0].toLowerCase();
        let params = split.splice(1);

        this.error = false;

        if(!logged && cmd != "login") {
            this.error = true;
            this.output = `You must be authentified. Type 'login [username]'`;
            return false;
        }

        if (logged && cmd == "login") {
            this.error = true;
            this.output = `You are already logged`;
            return false;
        }
        
        if (!this.commands[cmd] || !availableCommands.includes(cmd) || !this.commands[cmd].scope.includes(scope)) {
            this.error = true;
            this.output = `Command '${cmd}' not found`;
            return false;
        }

        if(this.commands[cmd].parameters.length != params.length) {
            this.error = true;
            this.output = `Syntax error: ${this.commands[cmd].syntax}`;
            return false;
        }

        this.name = cmd;
        this.params = params;
    }
}

export default Commands;