const { User } = require('../models');

const userData = [
    {
        name: 'emac',
        email: "emac@tech.com.au",
        password: '12345678',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;