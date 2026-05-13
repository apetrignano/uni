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

  const max = new Date(req.query.max);
  const min = new Date(req.query.min);
  const email = req.query.email;

  if(!max||!min) {
    return res.status(400).json({errore: 'Specificare il range di date in cui ricercare!'});
  }
  if(!email) {
    return res.status(400).json({errore: 'Bisogna inserire una email!'});
  }

  const collection = db.collection('comments');

  const filtro = {
    email: email,
    date: {
      $gte: min,
      $lte: max
    }}

  const films = await collection
    .find(filtro)
    .limit(30)
    .project({ movie_id: 1, text:1, _id: 0 })
    .toArray();

  res.status(200).json(films);

});

const PORT = 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server avviato su http://localhost:${PORT}`);
      console.log(`Link di esempio: http://localhost:${PORT}/comments?email=mercedes_tyler@fakegmail.com&min=2002-08-18&max=2015-12-10`)
    });
  })
  .catch(err => {
    console.error('Errore di connessione: ', err);
  });
