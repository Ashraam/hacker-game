export default (state, msg) => {
    state.logs.push({
        output: msg,
        type: 'success'
    });
}