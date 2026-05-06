const express = require('express') // instanziazione di variabile contenente il pacchetto, il quale all'interno ha le classi
const app = express() // si associa ad app l'oggetto express, il quale è un singolo elemento del pacchetto express
const port = 3000 // è uno standard, anche se non è estremamente sicura

const myLogger = function (req, res, next) { // si tratta di una middleware: è una funzione che viene chiamata prima di tutto quando si lancia l'applicativo, serve perchè ovviamente alcune cose è necessario farla prima di ogni altra cosa, tipo l'autenticazione etc
  console.log('LOGGED')
  const api_key = req.query.apy_key;
  next() // passa alla funzione successiva
}

// eseguita prima dell'API, ad esempio, verifica tipo che la api_key sia corretta, cose così


app.get('/', (req, res) => {
  res.send('pagina base');
})


app.get('/:id', (req, res) => {
  const id = req.params.id;
  const lang = req.query.lang; // è un valore passato nella "query" appunto, ossia quella parte di link che sta dopo il punot di domanda
  res.send(`risposta main2 in ${lang}`)
})

app.use(myLogger)

app.listen(port, () => { // dice al programma di rimanere in attesa, in "ascolto" sulla porta che noi abbiamo specificato
  console.log(`Ora si è in ascolto sulla porta ${port}`)
})
