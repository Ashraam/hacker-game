import Faker from '../faker'
import Output from '../output'

export default (state) => {
    if(state.networks.length > 0) {
        state.logs.push(Output.simple(state.user, output(state.networks)));
        return false;
    }

    const networks = Faker.networks();

    state.networks = networks;
    let message = output(networks);

    state.logs.push(Output.simple(state.user, message));
}

function output(networks) {
    let message = `Here are all the networks around you (You can refresh that list using the 'rescan' command)<br />`;

    networks.forEach(nw => {
        message += `${nw.username} (${nw.ip})<br />`;
    });

    return message;
}