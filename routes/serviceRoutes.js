const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// GET all services
router.get('/',(req,res) => {serviceController.findAllServices(req,res)});

// GET /services/:price
router.get('/price/:price',(req,res) => {serviceController.findServiceByPrice(req,res)});

//GET /services/frequent/:quantity
router.get('/frequent/:quantity',(req,res) => {serviceController.findServiceByQuantity(req,res)});

//GET /services/total_cost/:type
router.get('/total_cost/:type',(req,res) => {serviceController.findTotalCostByType(req,res)});


//GET /services/:id
router.get('/:id',(req,res) => {serviceController.findServiceById(req,res)});

module.exports = router;