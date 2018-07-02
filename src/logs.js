import Output from './output'

const user = {
    isLogged: false,
    isDistant: false,
    local: {
        name: 'Guest',
        host: 'localhost'
    },
    distant: {
        name: 'Root',
        host: 'distant'
    }
};
const log = Output.simple(user, `Authentication required, please login using the command 'login [username]'`);

export default [log];