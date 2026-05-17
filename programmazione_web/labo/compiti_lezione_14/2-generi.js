// importo le librerie che mi servono
require('dotenv').config();
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const mongoURL = process.env.MONGO_URI;
const app = express();
const port = 3000;

app.use(express.json());

app.get('/movies', async (req, res) => {

    var genre = req.query.genre;
        if (genre === undefined) genre = "Crime";
    
    var filter = {
        genres: genre
    }
    // blocco che comunica con mongodb
    const client = new MongoClient(mongoURL);
    await client.connect();
    const collection = client.db("sample_mflix").collection("movies");
    const cursor = collection.find(filter);
    const result = await cursor.toArray();
    await client.close();
    res.json(result);

})

app.get('/movies/good', async (req, res) => {

    var filter = {
        $or: [
            {genres: "Mystery"},
            {genres: "Western"}
        ]
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
    console.log(`http://localhost:${port}/movies`);
    console.log(`http://localhost:${port}/movies?genre=Crime`);
    console.log(`http://localhost:${port}/movies/good`);



})