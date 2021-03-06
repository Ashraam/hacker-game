import Output from '../output'

export default (state, payload) => {
    let moneyFrom = payload[0].toLowerCase();
    let moneyTo = (moneyFrom === 'eur') ? 'btc' : 'eur';
    let value = payload[1];

    if (!['eur', 'btc'].includes(moneyFrom)) {
        state.logs.push(Output.error(state.user, `The money must be 'eur' or 'btc'`));
        return false;
    }

    if (!/^\d+(\.\d+)?$/.test(value)) {
        state.logs.push(Output.error(state.user, `The value must be a valid integer or float number`));
        return false;
    }

    let base = parseFloat((moneyFrom === 'eur') ? state.balance.eur : state.balance.btc);

    if (value > base) {
        state.logs.push(Output.error(state.user, `You don't have enough ${(moneyFrom === 'eur') ? 'euros' : 'bitcoins'}`));
        return false;
    }

    let rate = ((moneyFrom === 'eur') ? state.balance.rate : (1 / state.balance.rate)).toFixed(5);
    let change = (value * rate).toFixed(2);

    state.balance[moneyFrom] -= parseFloat(value);
    state.balance[moneyTo] += parseFloat(change);

    state.logs.push(Output.success(state.user, `You have converted ${value} ${(moneyFrom === 'eur') ? 'euros' : 'bitcoins'} for ${change} ${(moneyFrom === 'eur') ? 'bitcoins' : 'euros'} (Change rate: ${rate})`));
}