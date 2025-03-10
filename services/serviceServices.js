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

function findServiceByQuantity(quantity) {
    return connection.promise().query('SELECT service_name, SUM(quantity) as "Nombre utilisation du service" ' +
        'FROM services ' +
        'JOIN inclure ON inclure.id_service = services.id_service ' +
        'GROUP BY inclure.id_service ' +
        'HAVING SUM(quantity) >= ? ' +
        'ORDER BY SUM(quantity) DESC',
        [quantity]).then((results) => {
            return results[0];
        })
}

function findServiceById(id) {
    return connection.promise().query('SELECT * FROM services WHERE id_service = ?', [id]).then((results) => {
        return results[0];
    })
}

function findTotalCostByType(type) {
    return connection.promise().query('SELECT SUM(total_price) FROM inclure INNER JOIN reservations ON reservations.id_reservation = inclure.id_reservation INNER JOIN rooms ON rooms.id_room = reservations.id_room WHERE room_type = ?',[type]).then((results) => {
            return results[0];
        })
}

module.exports = {
    findAllServices,
    findServiceByPrice,
    findServiceByQuantity,
    findServiceById,
    findTotalCostByType
}