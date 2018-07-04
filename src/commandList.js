export default {
    help: {
        buyable: false,
        scope: ['local', 'distant'],
        parameters: [],
        description: `Show the available commands`,
        syntax: null
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
        syntax: null
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
        syntax: null
    },
    connect: {
        buyable: false,
        scope: ['local'],
        parameters: ['ip'],
        description: `Connect to a remote network`,
        syntax: `connect [ip]`
    },
    exit: {
        buyable: false,
        scope: ['distant'],
        parameters: [],
        description: `Exit to a remote network`,
        syntax: null
    },
}