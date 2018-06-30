import Faker from '../faker'

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
    let output = `Here are all the networks around you (You can refresh that list using the 'rescan' command)<br />`;
    networks.forEach(nw => {
        output += `${nw.username} (${nw.ip})<br />`; 
    });

    state.logs.push({
        type: 'output',
        output: output
    });
}