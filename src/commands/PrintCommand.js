export default (state, command) => {
    state.logs.push({
        output: command,
        type: 'cmd'
    });

    state.history.unshift(command);
    if (state.history.length > 3) {
        state.history.pop();
    }
}