const faker = require('faker')

const Faker = {
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    networks(min=4, max=8) {
        const networks = [];
        let i = this.randomInt(min,max);

        for(let n=0; n<i; n++) {
            networks.push({
                security: Math.random(),
                password: faker.internet.password(),
                ip: faker.internet.ip(),
                username: faker.internet.userName()
            });
        }

        return networks;
    }
}

export default Faker;