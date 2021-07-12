const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb+srv://paulo:<password>@cluster0.ygfoj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true })

// mensagem de erro ao retornar um post
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não é válido para o atributo '{PATH}'."