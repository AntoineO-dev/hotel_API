const clientsService = require('../services/clientsService');

async function findAllClients(req, res) {
    try {
        const clients = await clientsService.findAllClients();
        res.status(200);
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({'message':'Une erreur est survenue lors de la récupération des clients'});
    }
}

async function findReservation(req, res) {
    try {
        const clients = await clientsService.findReservation(req.params.year,res);
        res.status(200);
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({'message':'Une erreur est survenue lors de la récupération des clients'});
    }
}

async function findReservationAbove(req, res) {
    try {
        const clients = await clientsService.findReservationAbove(req.params.total_cost,res);
        res.status(200);
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({'message':'Une erreur est survenue lors de la récupération des clients'});
    }
}

async function findReservationBelow (req, res) {
    try {
        const clients = await clientsService.findReservationBelow(req.params.total_cost,res);
        res.status(200);
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({'message':'Une erreur est survenue lors de la récupération des clients'});
    }
}

async function findInfosClients(req, res) {
    try {
        const clients = await clientsService.findInfosClients();
        res.status(200);
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({'message':'Une erreur est survenue lors de la récupération des clients'});
    }
}

async function findReservationEmail(req, res) {
    try {
        const clients = await clientsService.findReservationEmail(req.params.MONTH,req.params.YEAR,res);
        res.status(200);
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({'message':'Une erreur est survenue lors de la récupération des clients'});
    }
}

async function findReservationByRoomType(req, res) {
    try {
        const clients = await clientsService.findReservationByRoomType(req.params.room_type,res);
        res.status(200);
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({'message':'Une erreur est survenue lors de la récupération des clients'});
    }
}

async function findRevenueMax(req, res) {
    try {
        const clients = await clientsService.findRevenueMax();
        res.status(200);
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({'message':'Une erreur est survenue lors de la récupération des clients'});
    }
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
}