const Commands = {
    name: '',
    params: [],
    commands: {
        help: {
            buyable: false,
            parameters: [],
            description: `Show the available commands`,
            syntax: `the help command don't need any parameters`
        },
        login: {
            buyable: false,
            parameters: ['name'],
            description: `Authenticate the user on the machine`,
            syntax: `login [username]`,
        },
        balance: {
            buyable: false,
            parameters: [],
            description: `Display your current balances (EUR, BTC, Change rate)`,
            syntax: `the help command don't need any parameters`
        },
        convert: {
            buyable: false,
            parameters: ['money', 'amount'],
            description: `Convert between EUR and BTC`,
            syntax: `convert [eur|btc] [amount]`
        },
        scan: {
            buyable: false,
            parameters: [],
            description: `Scan for all the network around you`,
            syntax: `the scan command don't need any parameters`
        }
    },
    error: false,
    output: '',

    init(str, availableCommands, logged) {
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
        
        if (!this.commands[cmd] || !availableCommands.includes(cmd)) {
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