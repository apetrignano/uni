// per includere le librerie che ci servono
//const env = require('dotenv/config');
require('dotenv').config();
//env.config();
//import 'dotenv/config';
const express = require('express');
//import express from 'express';
//const {get} = require('mongodb');

// per stabilire la connessione + setup
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const mongoURL = process.env.MONGO_URI;

//import {MongoClient, ObjectId} from 'mongodb';

const app = express();
const port = 3000;

app.use(express.json());

// parti di backend nell'azione

app.get('/movies', async(req, res) => {
    
    var title = req.query.title
    var from = req.query.from;
        if(from === undefined) from = 1900;
    var to = req.query.to;
        if (to === undefined) to = 2013;
    var filter = {
        title: {
            $regex: title,
            $options: "i"
        },
        year: {
            $gte: parseInt(from),
            $lte: parseInt(to)
        }
    }
    
    const client = new MongoClient(mongoURL);
    await client.connect();
    const collection = client.db("sample_mflix").collection("movies");
    const cursor = collection.find(filter);
    const result = await cursor.toArray();
    await client.close();
    res.json(result);

})

app.listen(port, () => {

    console.log(`http://localhost:${port}/movies?from=2003&to=2010&title=and`);
})