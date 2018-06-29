<template>
    <div id="printer" ref="printer">
        <ul>
            <li v-for="(log, index) in logs" :key="index" :class="[log.type]"><span>{{ username }}</span> <span v-html="log.output"></span></li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        logs() {
            return this.$store.state.logs;
        },

        logged() {
            return this.$store.state.logged;
        },

        username() {
            if(this.logged) {
                return `${this.$store.state.username}@localhost~`;
            } else {
                return `Guest@localhost~`;
            }
        }
    },

    watch: {
        logs() {
            console.log('auto scroll');
            this.$el.scrollTop = this.$el.scrollHeight;
        }
    }
}
</script>
