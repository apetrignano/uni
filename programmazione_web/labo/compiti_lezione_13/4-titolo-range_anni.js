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

  const max = parseInt(req.query.max);
  const min = parseInt(req.query.min);
  const titolo = req.query.titolo;

  if(!max||!min) {
    return res.status(400).json({errore: 'Specificare il range di anni in cui ricercare!'});
  }
  if(!titolo) {
    return res.status(400).json({errore: 'Bisogna inserire un titolo!'});
  }

  const collection = db.collection('movies');

  const filtro = {
    year: {
        $gte: min,
        $lte: max
    },
    title: {
        $regex: titolo,
        $options: "i"
    }
    }

  const films = await collection
    .find(filtro)
    .limit(30)
    .project({ title: 1, year: 1, plot: 1, _id: 0 })
    .toArray();

  res.status(200).json(films);

});

const PORT = 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server avviato su http://localhost:${PORT}`);
      console.log(`Link modello: http://localhost:${PORT}/movies?titolo=<titolo>&min=<min>&max=<max>`)
    });
  })
  .catch(err => {
    console.error('Errore di connessione: ', err);
  });
