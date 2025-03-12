const connection = require('../config/bdd');

function findAllRooms() {
    return connection.promise().query('SELECT * FROM rooms').then((results) => {
        return results[0];
    })
}

function findOneRoom(id) {
    return connection.promise().query('SELECT * FROM rooms WHERE id_room = ?', [id]).then((results) => {
        return results[0][0];
    })
}

function findAvailableRooms() {
    return connection.promise().query('SELECT * FROM rooms WHERE status = 1').then((results) => {
        return results[0];
    })
}

function averageCapacity() {
    return connection.promise().query('SELECT AVG(capacity) as "Capacité moyenne" FROM rooms').then((results) => {
        return results[0][0];
    })
}

function pricesAboves(price) {
    return connection.promise().query('SELECT * FROM rooms WHERE price_per_night >= ?', [price]).then((results) => {
        return results[0];
    })
}

function findByType(type) {
    return connection.promise().query('SELECT * FROM rooms WHERE room_type = ?', [type]).then((results) => {
        return results[0];
    })
}

function findByCapacity(capacity) {
    return connection.promise().query('SELECT * FROM rooms WHERE capacity >= ?', [capacity]).then((results) => {
        return results[0];
    })
}

function findByTypeAndAvailable(type) {
    return connection.promise().query('SELECT * FROM rooms WHERE room_type = ? AND status = 1', [type]).then((results) => {
        return results[0];
    })
}

function pricesBellow(price) {
    return connection.promise().query('SELECT * FROM rooms WHERE price_per_night <= ?', [price]).then((results) => {
        return results[0];
    })
}

function pricesBetween(min, max) {
    return connection.promise().query('SELECT * FROM rooms WHERE price_per_night BETWEEN ? AND ?', [min, max]).then((results) => {
        return results[0];
    })
}

async function createRoom(room) {
    const results = await connection.promise().query('INSERT INTO rooms SET ?', [room]);
    return await findOneRoom(results[0].insertId);
}

async function updateRoom(id, room) {
    await connection.promise().query('UPDATE rooms SET ? WHERE id_room = ?', [room, id]);
    return await findOneRoom(id);
}

async function deleteRoom(id) {
    const response = await connection.promise().query('DELETE FROM rooms WHERE id_room = ?', [id]);
    return response[0].affectedRows;
}


module.exports = {
    findAllRooms,
    findOneRoom,
    findAvailableRooms,
    averageCapacity,
    pricesAboves,
    findByType,
    findByCapacity,
    findByTypeAndAvailable,
    pricesBellow,
    pricesBetween,
    createRoom,
    updateRoom,
    deleteRoom
}