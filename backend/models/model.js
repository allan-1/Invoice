const mongoose = require('mongoose');
const {Schema} = mongoose

mongoose.connect('mongodb://localhost:27017/model', 
    {useNewUrlParser: true, useUnifiedTopology: true}
).then(()=>{
    console.log("Database Started");
}).catch(e => console.log(e))

const modelSchema = new Schema({
    invoiceNo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: String
})

const model = mongoose.model('model', modelSchema)

module.exports = model