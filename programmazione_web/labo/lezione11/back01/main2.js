const express = require('express') // instanziazione di variabile contenente il pacchetto, il quale all'interno ha le classi
// istanzia dentro la variabile express l'oggetto preso dal pacchetto "express"
const app = express() // si associa ad app l'oggetto express, il quale è un singolo elemento del pacchetto express
const port = 3000 // è uno standard, anche se non è estremamente sicura

const myLogger = function(req, res, next) {
  console.log('LOGGED')
const api_key= req.query.apy_key;

  next() // passa alla funzione successiva


}



app.get('/:id', (req, res) => {
    const id=req.params.id;
    const lang=req.query.lang;
    res.send(`risposta main2 in ${lang}`)
})

app.use(myLogger)

app.listen(port, () => { // dice al programma di rimanere in attesa, in "ascolto" sulla porta che noi abbiamo specificato
  console.log(`Ora si è in ascolto sulla porta ${port}`)
})
