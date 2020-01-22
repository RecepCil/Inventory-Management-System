const Sequelize = require('sequelize');
var connectionString = "postgres://postgres:cilrecep.3@localhost:5432/Trial";
const database = new Sequelize(connectionString);

const Account = database.define(
    'account',
    {
        user_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        created_on: {
            type: Sequelize.STRING
        },
        last_login: {
            type: Sequelize.STRING
        },
        company_id: {
            type: Sequelize.STRING
        }
    },
    {
        tableName: 'account',
        timestamps: false
    }
);

//Export the model
module.exports = Account;