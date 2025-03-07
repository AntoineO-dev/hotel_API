const connection = require('../config/bdd');

function findAllServices() {
    return connection.promise().query('SELECT * FROM services').then((results) => {
        return results[0];
    })
}

function findServiceByPrice(price) {
    return connection.promise().query('SELECT * FROM services WHERE price = ?', [price]).then((results) => {
        return results[0];
    })
}

module.exports = {
    findAllServices,
    findServiceByPrice
}