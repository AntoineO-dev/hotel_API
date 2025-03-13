const connection = require('../config/bdd');

async function findUserByEmail(email) {
    const response = await connection.promise().query('SELECT * FROM users WHERE email = ?', [email]);
    return response[0][0];
}

module.exports = {
    findUserByEmail
};