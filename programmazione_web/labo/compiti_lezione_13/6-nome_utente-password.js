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

app.post('/users', async(req, res) => {
    const{email, password } = req.body;

    if(!email||!password) {
        return res.status(400).json({errore: 'Inserire email e password!'});
    }

    try{
        const collection = db.collection('users');

        const query = {
            email: email,
            password: password
        };
        const user = await collection.findOne(query);

        if(user) {
            res.status(200).json({
                mess: 'login ok',
                utente: {nome: user.name, email: user.email}
            });
        } else {
            res.status(401).json({errore: "username o password non validi!"});
        }
    }

    catch(error){
        console.error('Errore durante il login:', error);
        res.status(500).json({errore: "errore interno del server"});
    }



})

const PORT = 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server avviato su http://localhost:${PORT}/users`);
      //console.log(`Link di prova: http://localhost:${PORT}/movies?min=<min>&max=<max>`)
    });
  })
  .catch(err => {
    console.error('Errore di connessione: ', err);
  });
