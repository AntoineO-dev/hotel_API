const connection = require('../config/bdd.js');


function findAllValidatedReservations() {
    return connection.promise().query('SELECT * FROM reservations WHERE reservation_status like "valider"').then((results) => {
        return results[0];
    })
}

function findCostAverage() {
    return connection.promise().query('SELECT AVG(total_cost) AS "Coût moyen" FROM reservations').then((results) => {
        return results[0];
    })
}

function findReservationByPrice(total_cost) {
    return connection.promise().query('SELECT * FROM reservations WHERE total_cost = ?', [total_cost]).then((results) => {
        return results[0];
    })
}

function findAllPassedReservations() {
    return connection.promise().query('SELECT * FROM reservations WHERE reservation_status like "passé"').then((results) => {
        return results[0];
    })
}

function findReservationByType(type) {
    return connection.promise().query('SELECT * FROM reservations INNER JOIN rooms ON rooms.id_room = reservations.id_room WHERE room_type = ?' , [type]).then((results) => {
        return results[0];
    })
}

function findReservationByRooms(room_number) {
    return connection.promise().query('SELECT * FROM reservations INNER JOIN rooms ON reservations.id_room = rooms.id_room WHERE room_number = ?', [room_number]).then((results) => {
        return results[0];
    })
}

function findReservationById(id) {
    return connection.promise().query('SELECT * FROM reservations WHERE id_reservation = ?', [id]).then((results) => {
        return results[0];
    })
}

async function createReservation(reservation) {
    return connection.promise().query('INSERT INTO reservations (id_room, id_client, reservation_status, reservation_date, check_in_date, check_out_date, total_cost) VALUES (?, ?, ?, ?, ?, ?, ?)', [reservation.id_room, reservation.id_client, reservation.reservation_status, reservation.reservation_date, reservation.check_in_date, reservation.check_out_date, reservation.total_cost]).then((results) => {
        return results[0];
    })
}

async function updateReservation(reservation) {
    return connection.promise().query('UPDATE reservations SET id_room = ?, id_client = ?, reservation_status = ?, reservation_date = ?, check_in_date = ?, check_out_date = ?, total_cost = ? WHERE id_reservation = ?', [reservation.id_room, reservation.id_client, reservation.reservation_status, reservation.reservation_date, reservation.check_in_date, reservation.check_out_date, reservation.total_cost, reservation.id_reservation]).then((results) => {
        return results[0];
    })
}

async function deleteReservation(id) {
    return connection.promise().query('DELETE FROM reservations WHERE id_reservation = ?', [id]).then((results) => {
        return results[0];
    })
}

module.exports = {
    findAllValidatedReservations,
    findCostAverage,
    findReservationByPrice,
    findAllPassedReservations,
    findReservationByType,
    findReservationByRooms,
    findReservationById,
    createReservation,
    updateReservation,
    deleteReservation
}
