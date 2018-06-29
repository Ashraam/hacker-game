<template>
    <div id="app">
        <div id="main">
            <printer></printer>

            <sidebar v-if="sidebarOpened"></sidebar>
        </div>
        <command-line></command-line>
    </div>
</template>

<script>
import Printer from './components/Printer.vue'
import CommandLine from './components/CommandLine.vue'
import Sidebar from './components/Sidebar.vue'

export default {
    name: 'App',

    computed: {
        sidebarOpened() {
            return this.$store.state.sidebarOpened;
        }
    },

    components: {
        Printer,
        CommandLine,
        Sidebar
    }
}
</script>