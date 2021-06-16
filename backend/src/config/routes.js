const express = require('express')

module.exports = function(server){
    // Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', routes)

    // Rotas de ciclo de pagamento, facilitando a utilização dos métodos http
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')

}