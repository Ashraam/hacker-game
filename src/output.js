const output = {
    user: null,
    host: null,
    output: null,

    simple(user, msg) {
        this.setUser(user);
        this.output = msg;

        return this.message('output');
    },

    success(user, msg) {
        this.setUser(user);
        this.output = msg;

        return this.message('success');
    },

    error(user, msg) {
        this.setUser(user);
        this.output = msg;

        return this.message('error');
    },

    command(user, msg) {
        this.setUser(user);
        this.output = msg;

        return this.message('cmd');
    },

    message(type) {
        return {
            type: type,
            user: this.user,
            host: this.host,
            output: this.output
        }
    },

    setUser(user) {
        if(user.isDistant) {
            this.user = user.distant.name;
            this.host = user.distant.host
        } else {
            this.user = user.local.name;
            this.host = user.local.host
        }
    }
}

export default output;