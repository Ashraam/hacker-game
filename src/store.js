import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './store/mutations'
import actions from './store/actions'

import Command from './command'
import Logs from './logs'

Vue.use(Vuex);

const vuex = new Vuex.Store({
    state: {
        sidebarOpened: false,
        user: {
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
        },
        balance: {
            eur: 100,
            btc: 100,
            rate: 0.8
        },
        networks: [],
        modules: [],
        commands: Command.commands,
        availableCommands: ['login'],
        logs: Logs,
        history: []
    },
    mutations,
    actions
});

export default vuex;