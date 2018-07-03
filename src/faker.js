const faker = require('faker')

const Faker = {
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    networks(min=4, max=8) {
        const networks = [];
        let i = this.randomInt(min,max);

        for(let n=0; n<i; n++) {
            networks.push(this.network());
        }

        return networks;
    },

    network() {
        return {
            security: this.networkSecurity(),
            password: faker.internet.password(),
            ip: faker.internet.ip(),
            username: faker.internet.userName(),
            devices: [],
            hacked: false
        }
    },

    networkSecurity() {
        const rnd = Math.random();
        if(rnd < 0.15) return 0;
        if(rnd < 0.40) return 1;
        if(rnd < 0.60) return 2;
        if(rnd < 0.80) return 3;
        return 4;
    }
}

export default Faker;