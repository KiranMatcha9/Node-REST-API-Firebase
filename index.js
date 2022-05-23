const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config')
const studentRouter = require('./routes/studentRouter')

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use('/api',studentRouter)

app.get('/',(req,res) => {
    res.send(`<h2>CRUD RESTful services with firebase</h2>`)
})

app.listen(config.port,()=>console.log(`'Server is listening to the port ${config.port} in url ${config.url}`))