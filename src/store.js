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
        logged: false,
        username: '',
        balance: {
            eur: 100,
            btc: 100,
            rate: 0.8
        },
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