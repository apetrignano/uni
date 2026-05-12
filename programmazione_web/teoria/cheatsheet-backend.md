# Lista di comandi MongoDB

## Installare librerie principali

```
npm install express
```

Questo serve per ogni libreria che ci serve obv, se si vuole installare globalmente(sconsigliato) si fa `--global`:

```
npm install --global nodemon
```

Poi bisogna installare la variabile che contiene il pacchetto dentro il main:

```
const express = require('express');
const app = express();
const port = 3000;
```

Per ora si nota che noi non stiamo ancora facendo niente con un database, bensì stiamo creando una specie di server, manca ancora un po' per effettivamente gestire il backend.

Se si lavora con mongodb e tutto il resto, all'inizio bisogna strutturare il progetto in questo modo per ora, in modo molto grezzo:

```
progetto/
├── server.js
├── package.json
└── .env
```

Il `.js` è il "main", l'unico file per ora, `package.json` si crea automaticamente quando si installano le librerie, e `.env` serve per stabilire la connessione tra il database e il computer, tenendola lontana dal main, così è più privato il tutto.

#### Librerie necessarie:

```
npm init -y
npm install express mongodb dotenv 
```

## Atto pratico

Su `.env`:

```
MONGODB_URI=mongodb://localhost:27017 // qui andrebbe messo il link che si trova su mongodb Atlas, facendo connect e compass
DB_NAME=sample_mflix
```

NON VA MAI MESSO SU GITHUB!

Su `server.js`:

``` javascript
import 'dotenv/config'; // per poter usare le costanti nel file .env
import express from 'express';
import {MongoClient} from 'mongodb';

const app = express();

app.use(express.json()); // per "capire" il json quando si ricevono i dati

const uri = process.env.MONGODB_URI; // legge la stringa di connessione ed il nome del database da .env
const dbName = process.env.DB_NAME;

const client = new MongoClient(uri); // si crea effettivamente il client

let db;

async function connectDB() { // funzione che si connette a mongodb, in modo asincrono
  await client.connect();
  db = client.db(dbName); // si salva in variabile javascript il nome del database
  console.log('Connesso al database');
}

app.get('<percorso>', async(req, res) => { // metodo get  per prendere il o i risultati della ricerca

  const titolo = req.query.titolo; // è tipo la window.location.search(), o qualcosa del genere

  if(!titolo) {
    return res.status(400).json({errore: 'specificare un titolo!'});
  }

  const collection = db.collection('movies'); // si seleziona la specifica collection (in questo caso "movies") dentro il database cui si è connessi

  const filtro = { <filtri da inserire> }

  const films = await collection
      .find(filtro) // cerca i documenti con i filtri impostati in precedenza
      .project({<campi da restituire>}) // dice quali campi vanno restituiti nello specifico
      .toarray(); // converte il tutto in un array javascript

  res.status(200).json(films);

});

const PORT = 3000;

connectDB() // prima ci si connette a mongodb, poi si avvia il server
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server avviato su http://localhost:${PORT}`);
      console.log(`prova: http://localhost:${PORT}/movies?titolo=${TITOLO}`); // da aggiustare il link perchè per ora è uno a caso
    });
  })
  .catch(err => {
    console.error('Errore di connessione: ', err);
  });
```

