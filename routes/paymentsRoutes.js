const express = require('express');
const router = express.Router();
const paymentsController = require('../controllers/paymentsController');


// GET all payments
router.get('/',(req,res) => {paymentsController.findAllPayments(req,res)});

// GET /paymentsbyamount/:AMOUNT
router.get('/amount/:amount',(req,res) => {paymentsController.findPaymentByAmount(req,res)});

// GET /paymentsamount/:MONTH/:YEAR
router.get('/amount/:month/:year',(req,res) => {paymentsController.findPaymentsAmountByYear(req,res)});

// GET /payments/:method
router.get('/method/:method',(req,res) => {paymentsController.findPaymentByMethod(req,res)});

// GET /payments/:status
router.get('/status/:status',(req,res) => {paymentsController.findPaymentByStatus(req,res)});

// GET /payments/:id
router.get('/:id',(req,res) => {paymentsController.findPaymentById(req,res)});

// POST /payments
router.post('/',(req,res) => {paymentsController.createPayment(req,res)});

//PATCH /payments/:id
router.patch('/:id',(req,res) => {paymentsController.updatePayment(req,res)});

//DELETE /payments/:id
router.delete('/:id',(req,res) => {paymentsController.deletePayment(req,res)});

module.exports = router;