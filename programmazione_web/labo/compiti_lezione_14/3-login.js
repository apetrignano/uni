require('dotenv').config();
const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const mongoURL = process.env.MONGO_URI;
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {

    const { email, password } = req.body;

    if (email === undefined || password === undefined) {
        res.status(400).json({ errore: 'email o password mancanti!' });
    }
    try {

        const query = {
            email: email,
            password: password
        };

        const client = await MongoClient.connect(mongoURL);
        const coll = client.db('sample_mflix').collection('users');
        const cursor = await coll.findOne(query);
        const result = await cursor.toArray();
        console.log(result);

        if(cursor) res.status(200).json({messaggio: 'login effettuato con successo!', utente: cursor.email});
        else res.status(401).json({errore: "nome utente o password non validi"});

        await client.close();

    }

    catch (error) {
        console.error('Errore durante il login:', error);
        res.status(500).json({ errore: "errore interno del server" });
    }

    console.log(`http:/localhost:${port}/login`);
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

// http://localhost:3000/login