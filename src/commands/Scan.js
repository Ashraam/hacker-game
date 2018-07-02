import Faker from '../faker'
import Output from '../output'

export default (state) => {
    if(state.networks.length > 0) {
        state.logs.push({
            output: `blabla`,
            type: 'output'
        });
        return false;
    }

    const networks = Faker.networks();

    state.networks = networks;
    let message = `Here are all the networks around you (You can refresh that list using the 'rescan' command)<br />`;
    networks.forEach(nw => {
        message += `${nw.username} (${nw.ip})<br />`; 
    });

    state.logs.push(Output.simple(state.user, message));
}