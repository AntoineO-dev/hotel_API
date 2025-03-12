const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');


// GET /clients
router.get('/',(req,res) => {clientsController.findAllClients(req,res)});

// GET /clients/reservation
router.get('/reservation/year/:year',(req,res) => {clientsController.findReservation(req,res)});

// GET /clients/reservationAbove
router.get('/reservationAbove/:total_cost',(req,res) => {clientsController.findReservationAbove(req,res)});

//GET/clients/reservationBelow
router.get('/reservationBelow/:total_cost',(req,res) => {clientsController.findReservationBelow(req,res)});

// GET /clients/infosclients
router.get('/infosClients',(req,res) => {clientsController.findInfosClients(req,res)});

//GET /clients/reservationemail
router.get('/reservationemail/:MONTH/:YEAR',(req,res) => {clientsController.findReservationEmail(req,res)});

//GET /clients/reservationbyroom_type
router.get('/reservationbyroom_type/:room_type',(req,res) => {clientsController.findReservationByRoomType(req,res)});

// GET /clients/revenumax
router.get('/revenumax',(req,res) => {clientsController.findRevenueMax(req,res)});

//GET /clients/:id
router.get('/:id',(req,res) => {clientsController.findOneClient(req,res)});

//POST /clients
router.post('/',(req,res) => {clientsController.createClient(req,res)});

//PATH /clients/:id
router.patch('/:id',(req,res) => {clientsController.updateClient(req,res)});

//DELETE /clients/:id
router.delete('/:id',(req,res) => {clientsController.deleteClient(req,res)});

module.exports = router;