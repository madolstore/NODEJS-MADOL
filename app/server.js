const express = require('express')
var app = express()
var bodyParser = require('body-parser')

var port = process.env.PORT || 8080 

require('./db')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


var router = require('./routes')
app.use('/api', router)

app.listen(port)
console.log('API escuchando en el puerto ' + port)

module.exports = app