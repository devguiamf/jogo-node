const { async } = require('@firebase/util');
const express = require('express');
const { get } = require("firebase/database")
const app = express()       
const geTabela = require('./database/database') 
                     
app.set('view engine', 'ejs')// Estou dizendopara o JS para usar o ejs como engine 
app.use(express.static('public'))

app.listen(8080,()=>{
    console.log('app rodando');
})

app.get('/', async (req, res)=> {
    const tables = await geTabela()
    tables.sort((playerA, playerB) =>{
        if (playerA.score > playerB.score){
            return -1
        }
        if (playerA.score< playerB.score){
            return 1
        }
        if (playerA.score === playerB.score){
            return 0
        }
    })
    res.render('index', {tables})    
})




