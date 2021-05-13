const model = require('../models/model')

function createInvoice (req, res){
    const body = req.body;
    if (!body){
        return res.status(400).json({
            success: false,
            message: 'You must provide a movie'
        })
    }
    const invoice = new model({
        invoiceNo: body.invoiceno,
        name: body.name,
        phone: body.phone,
        amount: body.amount,
        date: new Date().toString()
    })
    if(!invoice){
        return res.status(400).json({
            success: false,
            message: 'Error with the movie'
        })
    }
    invoice.save()
    // .then(()=>{
    //     return res.status(201).json({
    //         success: true,
    //         message: 'Invoice created'
    //     })
    // }).catch(error => {
    //     return res.status(400).json({            
    //         error,
    //         message: 'Invoice not created'
    //     })
    // })
    res.redirect('http://localhost:3000/')
}

async function getInvoice(req, res){
    await model.find({}, null, {sort: {'date': -1}}, (error, invoice)=>{
        if(error){
            return res.status(400).json({
                success: false,
                error,
            })
        }
        if(!invoice.length){
            return res.status(404).json({
                success: false,
                message: "Invoices not found"
            })
        }else{
            return res.status(200).json({
                success: true,
                data: invoice
            })
        }
    })
}

module.exports = {createInvoice, getInvoice}