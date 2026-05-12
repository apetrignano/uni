import 'dotenv/config';
import express from 'express';
import {MongoClient} from 'mongodb';

const app = express(); 
app.use(express.json());
const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

const client = new MongoClient(uri);

let db;

async function connectDB() {

  await client.connect();
  db = client.db(dbName);
  console.log('Connesso al database');

}

app.get('/movies', async(req, res) => {

  const titolo = req.query.titolo;

  if(!titolo) {
    return res.status(400).json({errore: 'specificare un titolo da cercare!'});
  }

  const collection = db.collection('movies');

  const filtro = {
    title: {
      $regex: titolo,
      $options: "i"
    }
  }

  const films = await collection
    .find(filtro)
    .project({ title: 1, year: 1, plot: 1, _id: 0 })
    .toArray();

  res.status(200).json(films);

});

const PORT = 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server avviato su http://localhost:${PORT}`);
      console.log(`Link di prova: http://localhost:${PORT}/movies?titolo=<titolo>`)
    });
  })
  .catch(err => {
    console.error('Errore di connessione: ', err);
  });
