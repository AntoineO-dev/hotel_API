const servicesService = require('../services/serviceServices');


async function findServiceById(req, res) {
    try {
        const result = await servicesService.findServiceById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function findAllServices(req, res) {
    try {
        const result = await servicesService.findAllServices();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function findServiceByPrice(req, res) {
    try {
        const result = await servicesService.findServiceByPrice(req.params.price);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function findServiceByQuantity(req, res) {
    try {
        const result = await servicesService.findServiceByQuantity(req.params.quantity);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function findTotalCostByType(req, res) {
    try {
        const result = await servicesService.findTotalCostByType(req.params.type);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function createService(req, res) {
    try {
        const result = await servicesService.createService(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function updateService(req, res) {
    try {
        const result = await servicesService.updateService(req.params.id, req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function deleteService(req, res) {
    try {
        const result = await servicesService.deleteService(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    findAllServices,
    findServiceByPrice,
    findServiceByQuantity,
    findServiceById,
    findTotalCostByType,
    createService,
    updateService,
    deleteService
};