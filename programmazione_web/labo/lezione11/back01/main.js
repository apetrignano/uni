// definizione di variabili globali

const express = require('express') // instanziazione di variabile contenente il pacchetto, il quale all'interno ha le classi
// istanzia dentro la variabile express l'oggetto preso dal pacchetto "express"
const app = express() // si associa ad app l'oggetto express, il quale è un singolo elemento del pacchetto express
const port = 3000 // è uno standard, anche se non è estremamente sicura
//const lang = (req.query.lang);

app.get('/', (req, res) => { // evento get da pov back serve per mandare una risposta al client, in sostanza si scrive: quando riceve un evento get, fa le cose descritte nello scope
  res.send('Esempio di primo backend')
})
// ricorda: bisogna sempre definire sia l'evento che l'urlm infatti devono essere passati deu parametri, il primo è url, ossia '/', che è localhost, il secondo parametro è una funzione senza nome, con 2 parametri, req e res, 
// la funzione è senza nome perchè, dato che abbiamo usato '=>', si è implementata la funzione localmente

app.get('/', (req, res) => {
    res.send('risposta con url più grande')
})

app.get('/ciao', (req, res) => {
    res.send('Hello world numero 2')
})

app.get('/:id', (req, res) => { // così si creano uri dinamici
  const id = req.params.id; // si estrapola dall'url di richiesta il numero id
  res.send(`lezione ${id}`);
})

/*app.get('/ciao/:id', (req, res) => {
  const id = req.params.id;
  res.send(`sezione ciao, scheda ${id}`);
})*/

app.get('/:id/:id2', (req, res) => {
  const pr = req.params.id;
  const sec = req.params.id2;
  res.send(`scheda ${pr} sottoscheda ${sec}`);
})
/*
const myLogger = function(req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)
*/

app.listen(port, () => { // dice al programma di rimanere in attesa, in "ascolto" sulla porta che noi abbiamo specificato
  console.log(`Ora si è in ascolto sulla porta ${port}`)
})
