export default (state, payload) => {
    let moneyBuy = payload[0].toLowerCase();
    let moneySell = (moneyBuy === 'eur') ? 'btc' : 'eur';
    let value = payload[1];

    if (!['eur', 'btc'].includes(moneyBuy)) {
        state.logs.push({
            output: `The money must be 'eur' or 'btc'`,
            type: 'error'
        });
        return false;
    }

    if (!/^\d+(\.\d+)?$/.test(value)) {
        state.logs.push({
            output: `The value must be a valid integer or float number`,
            type: 'error'
        });
        return false;
    }

    let base = parseFloat((moneyBuy === 'eur') ? state.balance.btc : state.balance.eur);
    let rate = ((moneyBuy === 'eur') ? state.balance.rate : (1 / state.balance.rate)).toFixed(5);
    let change = (value * rate).toFixed(2);

    if (value > base) {
        state.logs.push({
            output: `You don't have enough ${(moneyBuy === 'eur') ? 'bitcoins' : 'euros'}`,
            type: 'error'
        });
        return false;
    }

    state.balance[moneyBuy] += parseFloat(change);
    state.balance[moneySell] -= parseFloat(value);

    state.logs.push({
        output: `You have converted ${value} ${(moneyBuy === 'eur') ? 'bitcoins' : 'euros'} for ${change} ${(moneyBuy === 'eur') ? 'euros' : 'bitcoins'} (Change rate: ${rate})`,
        type: 'success'
    });
}