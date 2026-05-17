require('dotenv').config();
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const mongoURL = process.env.MONGO_URI;
const app = express();
const port = 3000;

app.use(express.json());

app.post('/users', async (req, res) => {

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
        const coll = client.db('pwm').collection('users');


    }

    catch (error) {
        console.error('Errore durante il login:', error);
        res.status(500).json({ errore: "errore interno del server" });
    }
})