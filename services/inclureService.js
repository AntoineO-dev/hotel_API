const connection = require('../config/bdd');

function findAllInclure() {
    return connection.promise().query('SELECT * FROM inclure').then((results) => {
        return results[0];
    })
}

function findInclureInReservation(id) {
    return connection.promise().query('SELECT service_name FROM services INNER JOIN inclure ON inclure.id_service = services.id_service INNER JOIN reservations ON reservations.id_reservations = inclure.id_reservations WHERE reservations.id_reservations = ?', [id]).then((results) => {
        return results[0];
    })
}

function findTotalCostInReservation(id) {
    return connection.promise().query('SELECT SUM(total_price) as "Montant Total" FROM inclure WHERE id_reservations =?', [id]).then((results) => {
        return results[0];
    })
}

function findInclureByType(type) {
    return connection.promise().query('SELECT * FROM reservations INNER JOIN inclure ON inclure.id_reservations =reservations.id_reservations INNER JOIN services ON services.id_service = inclure.id_service INNER JOIN rooms ON rooms.id_room = reservations.id_room WHERE room_type = ?', [type]).then((results) => {
        return results[0];
    })
}

function findMostUsedService(id_service) {
    return connection.promise().query('SELECT service_name, COUNT(service_name) as "Nombre d\'utilisations" FROM inclure INNER JOIN services ON inclure.id_service = services.id_service GROUP BY service_name ORDER BY COUNT(service_name) DESC ', [id_service]).then((results) => {
        return results[0];
    })
}

async function addInclure(inclure) {
    return connection.promise().query('INSERT INTO inclure SET ?', inclure).then((results) => {
        return { id: results[0].insertId, ...inclure }
    })
}

async function updateInclure(inclure) {
    return connection.promise().query('UPDATE inclure SET ? WHERE SET ?', [inclure, inclure.id_inclure]).then((results) => {
        return inclure;
    })
}

async function deleteInclure(id) {
    return connection.promise().query('DELETE FROM inclure SET ?', [id]).then((results) => {
        return results[0];
    })
}

module.exports = {
    findAllInclure,
    findInclureInReservation,
    findTotalCostInReservation,
    findInclureByType,
    findMostUsedService,
    addInclure,
    updateInclure,
    deleteInclure
}