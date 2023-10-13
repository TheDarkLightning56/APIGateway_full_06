const express = require('express')

const app = express()

const routes = require('./routes/api')


app.use('/api/v1', routes)//Caminho inicial das rotas estipuladas para a atividade

const PORT = process.env.PORT || 3000; //Porta onde a API será executa
app.listen(PORT , () =>{
    console.log(`Server: ${PORT}`)
})