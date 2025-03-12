const express = require('express');
const router = express.Router();
const RoomsController = require('../controllers/roomsController');


router.get('/',(req,res) => {RoomsController.findAllRooms(req,res)});

// GET /rooms/available
router.get ('/available',(req,res) => {RoomsController.findAvailableRooms(res)});

// GET /rooms/average_capacity
router.get ('/average_capacity',(req,res) => {RoomsController.averageCapacity(res)});

// GET /rooms/pricesAbove/:price
router.get('/pricesAbove/:price',(req,res) => {RoomsController.pricesAboves(req,res)});

// GET /rooms/type/:type
router.get('/type/:type',(req,res) => {RoomsController.findByType(req,res)});

//GET/rooms/capacity/:capacityAbove/:capacity
router.get('/capacityAbove/:capacity',(req,res) => {RoomsController.findByCapacity(req,res)});

// GET /rooms/type/:type/available
router.get('/type/:type/available',(req,res) => {RoomsController.findByTypeAndAvailable(req,res)});

// GET /rooms/pricesBelow/:price
router.get('/pricesBelow/:price',(req,res) => {RoomsController.pricesBellow(req,res)});

// GET /rooms/prices/:min/:max
router.get('/prices/:min/:max',(req,res) => {RoomsController.pricesBetween(req,res)});


// GET /rooms/:id
router.get('/:id',(req,res) => {RoomsController.findOneRoom(req,res)});

// POST /rooms
router.post('/',(req,res) => {RoomsController.createRoom(req,res)});

//PATCH /rooms/:id
router.patch('/:id',(req,res) => {RoomsController.updateRoom(req,res)});

//DELETE /rooms/:id
router.delete('/:id',(req,res) => {RoomsController.deleteRoom(req,res)});

module.exports = router;