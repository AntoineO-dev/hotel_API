const clientsService = require('../services/clientsService');
const bcrypt = require('bcryptjs');

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

async function findReservation(req, res) {
    try {
        const clients = await clientsService.findReservation(req.params.id,req.params.year,res);
        res.status(200);
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({'message':'Une erreur est survenue lors de la récupération des clients'});
    }
}

async function findOneClient(req, res) {
    try {
        const clients = await clientsService.findOneClient(req.params.id);
        res.status(200);
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({'message':'Une erreur est survenue lors de la récupération du client'});
    }
}

async function createClient(req, res) {
    try {
        //crypt le mot de passe
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const clients = await clientsService.createClient(req.body);
        res.status(201);
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({'message':'Une erreur est survenue lors de la création du client'});
    }
}

async function updateClient(req, res) {
    try {
        const clients = await clientsService.updateClient(req.params.id,req.body);
        res.status(200);
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({'message':'Une erreur est survenue lors de la modification du client'});
    }
}

async function deleteClient(req, res) {
    try {
        const clients = await clientsService.deleteClient(req.params.id);
        res.status(200);
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({'message':'Une erreur est survenue lors de la suppression du client'});
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
    findOneClient,
    createClient,
    updateClient,
    deleteClient
    
}