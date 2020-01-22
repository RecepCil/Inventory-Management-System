const Account = require('./../models/AccountSchema');

var connectionString = "postgres://postgres:cilrecep.3@localhost:5432/Trial"; // TODO: Bunu nasıl gizleyelim?
const { Client } = require('pg');
const client = new Client({
    connectionString: connectionString
});
client.connect();

function SignIn(credential) {

    var account = Account.findAll({
        where: {
            username: credential.username,
            password: credential.password
        }
    });

    return new Promise((resolve, reject) => {
        account.then(function (result, err) {
            err ? reject(err) : resolve(JSON.stringify(result));
        });
    });

}

function Register(credential) {

    var account = Account.create({
        username: credential.username,
        password: credential.password,
        email: credential.email,
        created_on: credential.created_on,
        last_login: credential.last_login,
        company_id: credential.company_id
    });

    return new Promise((resolve, reject) => {
        account.then(function (result, err) {
            err ? reject(err) : resolve(JSON.stringify(result));
        });
    });

}

module.exports.SignIn = SignIn;
module.exports.Register = Register;