const connection = require('../config/bdd');


function findAllClients() {
    return connection.promise().query('SELECT * FROM clients').then((results) => {
        return results[0];
    })
}

function findReservation(id, year) {
    return connection.promise().query('SELECT * FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client WHERE YEAR(check_in_date) = ?', [id, year]).then((results) => {
        return results[0];
    })
}

function findReservationAbove(total_cost) {
    return connection.promise().query('SELECT * FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client WHERE total_cost >= ?', [total_cost]).then((results) => {
        return results[0];
    })
}

function findReservationBelow(total_cost) {
    return connection.promise().query('SELECT * FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client WHERE total_cost <= ?', [total_cost]).then((results) => {
        return results[0];
    })
}

function findInfosClients() {
    return connection.promise().query('SELECT first_name, last_name, phone, email FROM clients').then((results) => {
        return results[0];
    })
}

function findReservationEmail(MONTH, YEAR) {
    return connection.promise().query('SELECT DISTINCT email from clients INNER JOIN reservations ON reservations.id_client = clients.id_client WHERE MONTH(check_in_date) = ? AND YEAR(check_in_date) = ?', [MONTH,YEAR]).then((results) => {
        return results[0];
    })
}

function findReservationByRoomType(room_type) {
    return connection.promise().query('SELECT * FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client INNER JOIN rooms ON rooms.id_room = reservations.id_room WHERE room_type = ?', [room_type]).then((results) => {
        return results[0];
    })
}

function findRevenueMax() {
    return connection.promise().query('SELECT CONCAT(first_name," ",last_name) AS client, amount AS total FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client INNER JOIN payer ON payer.id_reservations = reservations.id_reservations INNER JOIN payments ON payments.id_payments = payer.id_payment ORDER BY amount DESC limit 1' ).then((results) => {
        return results[0][0];
    })
}

function findClientById(id) {
    return connection.promise().query('SELECT * FROM clients WHERE id_client = ?', id).then((results) => {
        return results[0][0];
    })
}

async function createClient(client) {
    return connection.promise().query('INSERT INTO clients SET ?', client).then((results) => {
        return {id: results[0].insertId, ...client};
    })
}

async function updateClient(id, client) {
    return connection.promise().query('UPDATE clients SET ? WHERE id_client = ?', [client, id]).then((results) => {
        return {id: id, ...client};
    })
}

async function deleteClient(id) {
    return connection.promise().query('DELETE FROM clients WHERE id_client = ?', id).then((results) => {
        return results[0];
    })
}


module.exports = {
    findAllClients,
    findReservation,
    findReservationAbove,
    findReservationBelow,
    findInfosClients,
    findReservationEmail,
    findReservationByRoomType,
    findRevenueMax,
    findClientById,
    createClient,
    updateClient,
    deleteClient
}