require('dotenv').config();
const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const app = express();
const port = 3001;
const mongoURL = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());

app.post('/login', async (req, res) => {
    const nome = req.body.email;
    const password = req.body.password;
    const client = await MongoClient.connect(mongoURL);
    const coll = client.db('lezioni').collection('users');
    const filter = {email:nome, password: password}
  
    const cursor = coll.find(filter);
    const result = await cursor.toArray();
    console.log(result)

    // controlli campi
    //cerco se utente con email presente... con un bel find

    // se errore neotifico errore
    // se email presente allora controlla la pwd
    // se pwd non combacia allore errore
    //se pwd corretta restituisco un ok 
    if (result.length > 0) {
        res.send("OK")
    } else {
        res.status(401).send("KO")
    }
});

app.get('/movies', async (req, res) => {
    let year = req.query.year;
    const rated = req.query.rated;
    let to = req.query.to;
    let time = req.query.time;
    var filter = {}
    
    if (year === undefined)
        year = 1900;
    console.log(year);

    if (to === undefined)
        to = 2400;
    
if (time === undefined)
        time = 0;
    

    console.log(to);

    filter.year = {"$gte":parseInt(year),"$lte":parseInt(to)};
    filter.runtime = {"$gte": parseInt(time) };
    //mettere in or {year:{$gt:2010,$lt:2020},runtime:{$gt:100}}--  

    console.log(filter);

    const client = await MongoClient.connect(mongoURL);
    const coll = client.db('sample_mflix').collection('movies');
    const cursor = coll.find(filter);
    const result = await cursor.toArray();
    await client.close();
    res.json(result);
})

// const ObjectID = require('mongodb').ObjectId;
app.get('/movies/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const client = await MongoClient.connect(mongoURL);
    const coll = client.db('sample_mflix').collection('movies');
    const cursor = coll.find({_id:  new ObjectID(id)});
    const result = await cursor.toArray();
    await client.close();
    res.json(result);

})

app.post('/user', async (req, res) => {
    const cNome = req.body.nome;
    const cCognome = req.body.cognome;
    const cEmail = req.body.email;
    const cPassword = req.body.password;
    //console.log('letti valori di input');
    //Inizio logica di controllo dei dati

    if (cNome.length < 2) {
        res.status(401).send("Nome troppo corto");
    }
    if (cCognome.length < 2) {
        res.status(401).send("Cognome troppo corto");
    }

    if (cEmail == "valerio.bellandi@gmail.com") {
        res.status(409).send("Email già in uso");
    }
    //console.log('fine logica controllo dati');
    //console.log(mongoURL);

    try {
        //Fine logica di controllo dei dati

        const client = await MongoClient.connect(mongoURL);
        //if(client.isConnected()) {console.log('connesso al database');}
        console.log('ok #1');
        const coll = client.db('lezioni').collection('users');
        const user = {
            nome: cNome,
            cognome: cCognome,
            email: cEmail,
            password: cPassword
        }
       
        const result = await coll.insertOne(user);
        console.log("ok #2");
        console.log(result);
        res.json(result);
        await client.close();
        console.log('database chiuso');
      
    } catch (error) {
        if (error.code == 11000) {
            res.status(409).json({ success: false, message: "Email già in uso" });
            console.log('ok');
        } else {
            res.status(500).json({ success: false, message: "Errore non gestito" });

        }
    }

    res.send();
});


app.delete('/user/:id', async (req, res) => {
    const id = req.params.id;
    //console.log('acquisito il parametro id');

    try {
        const client = await MongoClient.connect(mongoURL);
        console.log('connesso con uri');
        const coll = client.db('lezioni').collection('users');
        console.log('connesso con collection');

        const result = await coll.deleteOne({_id: new ObjectId(id)});
        console.log('trovato id corrispondente ad utente');
        
        //if(result) console.log('eliminato con successo!');
        res.status(200).json({success: true, message: "utente eliminato"});
    } catch(error) {
        console.log(error);
        res.status(500).json({success: false, message: "errore generico"});
    }
    //res.send(`DELETED ${id}`);
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    res.send(`UTENTE ${id}`);
})

app.put('/user/:id', (req, res) => {
    const id = req.params.id;
    res.send(`AGGIORNATO ${id}`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})