// dependencies
const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 8080;

// imports
const Routes = require('./routes/routes')

// midldlewares
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

// routes
app.use('/api', Routes)

app.get('/', (req, res)=>{
    res.send('What am I even doing with my life')
})

app.listen(port, ()=>{
    console.log(`Server started on port: ${port}`)
})