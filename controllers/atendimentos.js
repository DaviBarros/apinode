const atendimentos = require('../models/atendimentos')
const Atendimento = require('../models/atendimentos')

module.exports = app => {

    app.get('/atendimentos', (req, res) => {
        Atendimento.listaAtendimento(res)
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Atendimento.buscaPorId(id, res)   
    })     

    app.post('/atendimentos', (req, res) => { 
        const atendimento = req.body
        Atendimento.adicionaAtendimento(atendimento,res)
    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.alteraAtendimento(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req,res) => {
        const id = parseInt(req.params.id)
        Atendimento.apagaPorId(id, res) 
    })

}