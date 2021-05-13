const express = require('express').Router
const route = express()

const {createInvoice, getInvoice} = require('../controllers/controler');

route.post('/invoice', createInvoice);
route.get('/invoices', getInvoice)

module.exports = route