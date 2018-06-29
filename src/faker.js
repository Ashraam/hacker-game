const faker = require('faker')

const Faker = {
    domain() {
        return faker.internet.domainName();
    },

    username() {
        return faker.internet.userName();
    },

    mac() {
        return faker.internet.mac();
    },

    ip() {
        return faker.internet.ip();
    }
}

export default Faker;