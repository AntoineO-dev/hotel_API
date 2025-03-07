const paymentsService = require('../services/paymentsService');

async function findAllPayments(req, res) {
    try {
        const result = await paymentsService.findAllPayments();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function findPaymentsAmountByYear(req, res) {
    try {
        const result = await paymentsService.findPaymentsAmount(req.params.month, req.params.year);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function findPaymentByMethod(req, res) {
    try {
        const result = await paymentsService.findPaymentByMethod(req.params.method);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function findPaymentByAmount(req, res) {
    try {
        const result = await paymentsService.findPaymentByAmount(req.params.amount);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function findPaymentByStatus(req, res) {
    try {
        const result = await paymentsService.findPaymentByStatus(req.params.status);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    findAllPayments,
    findPaymentByMethod,
    findPaymentsAmountByYear,
    findPaymentByAmount,
    findPaymentByStatus
};