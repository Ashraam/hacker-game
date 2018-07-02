<template>
    <div id="commandLine">
        <form @submit.prevent="exec">
            <span><i class="fa fa-chevron-right"></i></span>
            <input type="text" v-model.trim="command" @blur="historyIndex = -1" @keyup="history" placeholder="Enter your command here (type help if stuck)" ref="input" :disabled="loading">
            <button type="submit" :disabled="loading">Exec</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            historyIndex: -1,
            command: ''
        }
    },

    computed: {
        loading() {
            return this.$store.state.loading;
        },

        commandHistory() {
            return this.$store.state.history;
        }
    },

    methods: {
        exec() {
            if(this.command.length > 0) {
                this.$store.dispatch('executeCommand', this.command);

                this.command = '';

                this.$refs.input.focus();
            }
        },

        history(e) {
            let writeCommand = false;

            if(this.commandHistory.length === 0) return false;

            if(e.key === "ArrowUp") {
                this.historyIndex++;

                if(this.historyIndex >= this.commandHistory.length) this.historyIndex = 0;

                writeCommand = true;
            } else if(e.key === "ArrowDown") {
                this.historyIndex--;

                if(this.historyIndex < 0) this.historyIndex = this.commandHistory.length-1;

                writeCommand = true;
            } else {
                this.historyIndex = -1;
            }

            if(writeCommand) this.command = this.commandHistory[this.historyIndex];
        }
    }
}
</script>
