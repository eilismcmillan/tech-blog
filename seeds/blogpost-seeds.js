const { Blogpost } = require('../models');

const blogData = [
    {
        title: 'The importance of password encrypting',
        contents: "encrypting passwords is so important for user information security and protecting against scams and fraud!",
        user_name: "emac",
        date_created: "2023-06-13",
        user_id: 1
    },
];

const seedBills = () => Bill.bulkCreate(billData);

module.exports = seedBills;
