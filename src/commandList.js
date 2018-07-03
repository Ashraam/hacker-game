export default {
    help: {
        buyable: false,
        scope: ['local', 'distant'],
        parameters: [],
        description: `Show the available commands`,
        syntax: `the help command don't need any parameters`
    },
    login: {
        buyable: false,
        scope: ['local'],
        parameters: ['name'],
        description: `Authenticate the user on the machine`,
        syntax: `login [username]`,
    },
    balance: {
        buyable: false,
        scope: ['local'],
        parameters: [],
        description: `Display your current balances (EUR, BTC, Change rate)`,
        syntax: `the help command don't need any parameters`
    },
    convert: {
        buyable: false,
        scope: ['local'],
        parameters: ['money', 'amount'],
        description: `Convert between EUR and BTC`,
        syntax: `convert [eur|btc] [amount]`
    },
    scan: {
        buyable: false,
        scope: ['local'],
        parameters: [],
        description: `Scan for all the networks around you`,
        syntax: `the scan command don't need any parameters`
    },
    connect: {
        buyable: false,
        scope: ['local'],
        parameters: ['ip'],
        description: `Connect to a remote network`,
        syntax: `connect [ip]`
    }
}