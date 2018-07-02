<template>
    <div id="printer" ref="printer">
        <ul>
            <li v-for="(log, index) in logs" :key="index" :class="[log.type]"><span>{{ log.user }}@{{ log.host }}</span> <span v-html="log.output"></span></li>
            <li class="output" v-if="loading"><span>{{ user }}</span> <span>Action in progress, please wait...</span></li>
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
            return this.$store.state.user.isLogged;
        },

        loading() {
            return this.$store.state.loading;
        },

        user() {
            const user = this.$store.state.user;

            if(!user.isLogged) return `Guest@localhost`;

            if(user.isDistant) return `${user.distant.name}@${user.distant.host}`;

            return `${user.local.name}@${user.local.host}`;
        }
    },

    watch: {
        logs() {
            this.$el.scrollTop = this.$el.scrollHeight;
        }
    }
}
</script>
