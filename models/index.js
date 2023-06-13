const Blogpost = require('./blogpost');
const User = require('./User');


Blogpost.belongsTo(User, {
    foreignKey: 'user_id'
});

//User has many Bills
User.hasMany(Blogpost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = {
    Blogpost,
    User
};