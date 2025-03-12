const RoomsService = require('../services/roomsService');

async function findAllRooms(req, res) {
    try {
        const rooms = await RoomsService.findAllRooms();
        res.status(200);
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ 'message': 'Une erreur est survenue lors de la récupération des chambres' });
    }
}

async function findOneRoom(req, res) {
    try {
        const room = await RoomsService.findOneRoom(req.params.id);
        res.status(200);
        res.json(room);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ 'message': 'Une erreur est survenue lors de la récupération de la chambre' });

    }
}

async function findAvailableRooms(res) {
    try {
        const rooms = await RoomsService.findAvailableRooms();
        res.status(200);
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ 'message': 'Une erreur est survenue lors de la récupération des chambres disponibles' });
    }
}

async function averageCapacity(res) {
    try {
        const averageCapacity = await RoomsService.averageCapacity();
        res.status(200);
        res.json(averageCapacity);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ 'message': 'Une erreur est survenue lors de la récupération de la capacité moyenne des chambres' });
    }
}

async function pricesAboves(req, res) {
    try {
        const rooms = await RoomsService.pricesAboves(req.params.price);
        res.status(200);
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ 'message': 'Une erreur est survenue lors de la récupération des chambres' });
    }
}

async function findByType(req, res) {
    try {
        const rooms = await RoomsService.findByType(req.params.type);
        res.status(200);
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ 'message': 'Une erreur est survenue lors de la récupération des chambres' });
    }
}

async function findByCapacity(req, res) {
    try {
        const rooms = await RoomsService.findByCapacity(req.params.capacity);
        res.status(200);
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ 'message': 'Une erreur est survenue lors de la récupération des chambres' });
    }
}

async function findByTypeAndAvailable(req, res) {
    try {
        const rooms = await RoomsService.findByTypeAndAvailable(req.params.type);
        res.status(200);
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ 'message': 'Une erreur est survenue lors de la récupération des chambres' });
    }
}

async function pricesBellow(req, res) {
    try {
        const rooms = await RoomsService.pricesBellow(req.params.price);
        res.status(200);
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ 'message': 'Une erreur est survenue lors de la récupération des chambres' });
    }
}

async function pricesBetween(req, res) {
    try {
        const rooms = await RoomsService.pricesBetween(req.params.min, req.params.max);
        res.status(200);
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ 'message': 'Une erreur est survenue lors de la récupération des chambres' });
    }
}

async function createRoom(req, res) {
    try {
        const room = await RoomsService.createRoom(req.body);
        res.status(201);
        res.json(room);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ 'message': 'Une erreur est survenue lors de la création de la chambre' });
    }
}

async function updateRoom(req, res) {
    try {
        const room = await RoomsService.updateRoom(req.params.id, req.body);
        res.status(200);
        res.json(room);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ 'message': 'Une erreur est survenue lors de la modification de la chambre' });
    }
}

async function deleteRoom(req, res) {
    try {
        const rooms = await RoomsService.deleteRoom(req.params.id);
        res.status(204);
        res.json();
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ 'message': 'Une erreur est survenue lors de la suppression de la chambre' });
    }
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