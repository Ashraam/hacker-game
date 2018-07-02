import Output from '../output'

export default (state) => {
    let msg = `Your current balance is:<br /><u>Eur</u>: ${state.balance.eur} Euro<br /><u>Btc</u>: ${state.balance.btc} Bitcoin<br />The current exchange rate is 1EUR = ${state.balance.rate}BTC`;

    state.logs.push(Output.simple(state.user, msg));
}