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

app.get('/comments', async(req, res) => {

  const mail_utente = req.query.email;

  if(!mail_utente) {
    return res.status(400).json({errore: 'Specificare email utente!'});
  }

  const collection = db.collection('comments');

  const filtro = {
    email: mail_utente
    }

  const films = await collection
    .find(filtro)
    .limit(30)
    .project({ movie_id: 1, name: 1, text:1, _id: 0 })
    .toArray();

  res.status(200).json(films);

});

const PORT = 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server avviato su http://localhost:${PORT}`);
      console.log(`Link di esempio: http://localhost:${PORT}/comments?email=john_bishop@fakegmail.com`)
    });
  })
  .catch(err => {
    console.error('Errore di connessione: ', err);
  });
