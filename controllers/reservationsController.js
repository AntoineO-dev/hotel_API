const reservationsService = require('../services/reservationsService');

async function findAllValidatedReservations(req, res) {
    try {
        const clients = await reservationsService.findAllValidatedReservations();
        res.status(200);
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({'message':'Une erreur est survenue lors de la récupération des réservations'});
    }
}

async function findCostAverage(req, res) {
    try {
        const clients = await reservationsService.findCostAverage();
        res.status(200);
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({'message':'Une erreur est survenue lors de la récupération des réservations'});
    }
}

async function findReservationByPrice(req, res) {
    try {
        const clients = await reservationsService.findReservationByPrice(req.params.total_cost);
        res.status(200);
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({'message':'Une erreur est survenue lors de la récupération des réservations'});
    }
}

async function findAllPassedReservations(req, res) {
    try {
        const clients = await reservationsService.findAllPassedReservations();
        res.status(200);
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({'message':'Une erreur est survenue lors de la récupération des réservations'});
    }
}

async function findReservationByType(req, res) {
    try {
        const clients = await reservationsService.findReservationByType(req.params.type);
        res.status(200);
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({'message':'Une erreur est survenue lors de la récupération des réservations'});
    }
}

async function findReservationByRooms(req, res) {
    try {
        const clients = await reservationsService.findReservationByRooms(req.params.room_number);
        res.status(200);
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({'message':'Une erreur est survenue lors de la récupération des réservations'});
    }
}

module.exports = {
    findAllValidatedReservations,
    findCostAverage,
    findReservationByPrice,
    findAllPassedReservations,
    findReservationByType,
    findReservationByRooms
};