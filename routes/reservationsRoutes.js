const express = require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservationsController');


//GET /reservations/:room
router.get('/:room_number',(req,res) => {reservationsController.findReservationByRooms(req,res)});

// GET /reservationsvalidated
router.get('/validated',(req,res) => {reservationsController.findAllValidatedReservations(req,res)});

//GET /reservationspassed
router.get('/passed',(req,res) => {reservationsController.findAllPassedReservations(req,res)});

//GET /reservations/coûtmoyen
router.get('/costaverage',(req,res) => {reservationsController.findCostAverage(req,res)});

//GET /reservations/:total_cost
router.get('/:total_cost',(req,res) => {reservationsController.findReservationByPrice(req,res)});


//GET /reservations/type/:type
router.get('/type/:type',(req,res) => {reservationsController.findReservationByType(req,res)});




module.exports = router;