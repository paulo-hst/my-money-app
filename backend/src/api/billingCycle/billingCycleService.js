// criação da API REST
const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true }) // retorna sempre o objeto novo

module.exports = BillingCycle