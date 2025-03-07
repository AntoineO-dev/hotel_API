const express = require('express');
const router = express.Router();
const inclureController = require('../controllers/inclureController');


// GET all inclure
router.get('/',(req,res) => {inclureController.findAllInclure(req,res)});

//GET /inclureInReservation/:id
router.get('/inclureInReservation/:id', (req, res) => {inclureController.findInclureInReservation(req, res)});

//GET /inclureInReservation/total_cost/:id
router.get('/inclureInReservation/total_cost/:id', (req, res) => {inclureController.findTotalCostInReservation(req, res)});

//GET /inclureInReservation/type/:type
router.get('/inclureInReservation/type/:type', (req, res) => {inclureController.findInclureByType(req, res)});

//GET /inclureInReservation/most_used
router.get('/inclureInReservation/most_used/:id_service', (req, res) => {inclureController.findMostUsedService(req, res)});



module.exports = router;
