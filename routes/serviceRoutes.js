const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// GET all services
router.get('/',(req,res) => {serviceController.findAllServices(req,res)});

// GET /services/:price
router.get('/price/:price',(req,res) => {serviceController.findServiceByPrice(req,res)});

//GET /services/

module.exports = router;