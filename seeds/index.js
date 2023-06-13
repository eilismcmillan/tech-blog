const seedBlogposts = require('./blogpost-seeds');
const seedUsers = require('./user-seeds.js')

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedBlogposts();
    console.log('\n----- BLOGPOSTS SEEDED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    process.exit(0);
};

seedAll();