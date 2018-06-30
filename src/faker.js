const faker = require('faker')

const Faker = {
    networks() {
        const networks = [];
        let i = faker.random.number(8);
        if(i < 4) i = 4;

        for(let n=0; n<i; n++) {
            networks.push({
                domain: faker.internet.domainWord(),
                ip: faker.internet.ip(),
                username: faker.internet.userName()
            });
        }

        return networks;
    }
}

export default Faker;