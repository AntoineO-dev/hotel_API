const connection = require('../config/bdd');


function findAllPayments() {
    return connection.promise().query('SELECT * FROM payments').then((results) => {
        return results[0];
    })
}

function findPaymentByMethod(method) {
    return connection.promise().query('SELECT * FROM payments WHERE payment_method = ?', [method]).then((results) => {
        return results[0];
    })
}

function findPaymentsAmountByYear (month,year) {
    return connection.promise().query('SELECT SUM(amount) AS "Total des paiements" FROM payments WHERE MONTH(payment_date) = ? AND YEAR(payment_date) = ?', [month, year]).then((results) => {
        return results[0];
    })
} 

function findPaymentByAmount(amount) {
    return connection.promise().query('SELECT * FROM payments WHERE amount = ?', [amount]).then((results) => {
        return results[0];
    })
}

function findPaymentByStatus(status) {
    return connection.promise().query('SELECT * FROM payments JOIN payer ON payer.id_payment = payments.id_payments JOIN reservations ON reservations.id_reservations = payer.id_reservations WHERE reservation_status = ?', [status]).then((results) => {
        return results[0];
    })
}


module.exports = {
    findAllPayments,
    findPaymentByMethod,
    findPaymentsAmountByYear,
    findPaymentByAmount,
    findPaymentByStatus
    
}