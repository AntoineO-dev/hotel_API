const inclureService = require('../services/inclureService');

async function findAllInclure(req,res){
    const inclure = await inclureService.findAllInclure();
    res.json(inclure);
}

async function findInclureInReservation(req,res){
    const inclure = await inclureService.findInclureInReservation(req.params.id);
    res.json(inclure);
}

async function findTotalCostInReservation(req,res){
    const inclure = await inclureService.findTotalCostInReservation(req.params.id);
    res.json(inclure);
}

async function findInclureByType(req,res){
    const inclure = await inclureService.findInclureByType(req.params.type);
    res.json(inclure);
}

async function findMostUsedService(req,res){
    const inclure = await inclureService.findMostUsedService(req.params.id_service);
    res.json(inclure);
}

async function addInclure(req,res){
    const inclure = await inclureService.addInclure(req.body);
    res.json(inclure);
}

async function updateInclure(req,res){
    const inclure = await inclureService.updateInclure(req.body);
    res.json(inclure);
}

async function deleteInclure(req,res){
    const inclure = await inclureService.deleteInclure(req.params.id);
    res.json(inclure);
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
