const servicesService = require('../services/serviceServices');

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

module.exports = {
    findAllServices,
    findServiceByPrice
};