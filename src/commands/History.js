export default (state, cmd) => {
    if(state.history[0] !== cmd) {
        state.history.unshift(cmd);
    }

    if(state.history.length > 10) {
        state.history.pop();
    }
}