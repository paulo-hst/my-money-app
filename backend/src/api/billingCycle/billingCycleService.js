// criação da API REST
const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true }) // retorna sempre o objeto novo
BillingCycle.after('post', errorHandler).after('put', errorHandler) // tratamento de erros

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        // parâmetro value: valor inteiro
        if(error){
            res.status(500).json({ errors: [error] })
        }else{
            res.json({value})
        }
    })
})

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{
        // resgata soma ($sum) dos valores de crédito e débito
        // pipeline: passos (objetos) do aggregate
        // project: projeta atributos
        $project: { credit: { $sum: "$credits.value" }, debt: { $sum: "$debts.value" } }
    }, {
        $group: { _id: null, credit: { $sum: "$credit" }, debt: { $sum: "$debt" } }
    }, {
        $project: { _id: 0, credit: 1, debt: 1 } // retorna objeto ignorando o campo id (0 false - 1 true)
    }]).exec((error, result) => {
        if(error){
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
})

module.exports = BillingCycle