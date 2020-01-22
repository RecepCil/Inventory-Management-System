const Sequelize = require('sequelize');
var connectionString = "postgres://postgres:cilrecep.3@localhost:5432/Trial";
const database = new Sequelize(connectionString);

const Product = database.define(
    'product',
    {
        sku: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        company_id: {
            type: Sequelize.STRING
        },
        created_on: {
            type: Sequelize.STRING
        },
        last_modified: {
            type: Sequelize.STRING
        }
    },
    {
        tableName: 'product',
        timestamps: false
    }
);

//Export the model
module.exports = Product;