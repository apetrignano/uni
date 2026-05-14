const dns = require("dns");
dns.setServers(["1.1.1.1", "1.0.0.1"]);
const express = require('express');
const cors = require('cors');
const { get } = require("http");
// due righe che permettono di connettersi a mongodb:
const MongoClient = require('mongodb').MongoClient; // a noi non serve tutto mongodb, solo una piccola porzione, per questioni di efficienza noi installeremo solo ciò quindi 
const ObjectId = require('mongodb').ObjectId; // oggetto che permetterà la conversione di un numero o stringa ad objectid

const mongoURL = "mongodb+srv://angelopetrignano_db_user:BFQigMcrFi3IqoPs@cluster0.nk8d4eb.mongodb.net/?appName=Cluster0";
const app = express();
const port = 3000;

app.use(express.json());

app.get('/movies', async(req, res) => {

    // definizione dei valori che ci servono da filtro
    //const year = req.query.year;
    //const rated = req.query.rated; 
    var from = req.query.from;
    var to = req.query.to;
    var filter = { }

    /*
    // Va bene anche questo modo che è stato commmentato, forse è leggermente peggio per quanto riguarda la leggibilità del codice 
    if(from === undefined) from = 1900;
    console.log(`from: ${from}`);
    if(to === undefined) to = 2013;
    console.log(`to: ${to}`);

    var filter = {
        year: {
            $gte: parseInt(from),
            $lte: parseInt(to)
        }
    }
    */

    if(from === undefined) from = 1900;
    console.log(from);
    if(to === undefined) to = 2016;
    console.log(to);

    filter.year = {"$gte": parseInt(from), "$lte": parseInt(to)};
    
    //console.log(`anno ricercato:${year}`);
    const client = new MongoClient(mongoURL); // costruttore di un "connettore" con argomento l'url che serve a noi
    await client.connect(); // in qeusto modo ci si connette effettivamente
    const coll = client.db("sample_mflix").collection('movies'); // si istanzia un elemento js a partire dalla collection specifica
    const cursor = coll.find(filter); // altra creazione di oggetto js, sta volta a partire dalla ricerca di tutti gli elementi della collection istanziata prima corrispondenti ai filtri selezionati
    const result = await cursor.toArray(); // si converte tutto ciò che è stato trovato in array 
    await client.close(); // si chiude la connessione
    res.json(result); // si converte il risultato in json e si manda come response

})

/*app.post('/login', async (requestAnimationFrame, res) => {
    const nome = req.body.email;
    const password = req.body.password;
    const client = await MongoClient.connect(mongoURL);
    const coll = client.db('pwm').collection('users');
    const filter = {}
}) */

app.listen(port, () => {
    console.log(`In ascolto sulla porta${port}`)
    console.log(`http://localhost:${port}/movies?from=2003&to=2010`);
    console.log(`http://localhost:${port}/movies?from=2010`);
    console.log(`http://localhost:${port}/movies?to=2010`);
})