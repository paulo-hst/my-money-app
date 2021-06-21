const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express() // instancia do express
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true })) // body parser interpreta caso seja url encoded
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser()) // permite paginação

server.listen(port, function(){
    console.log(`Servidor rodando na porta ${port}`)
})

module.exports = server