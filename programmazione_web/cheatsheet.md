# Comandi utili per pagine web dinamiche

Per capire come usare ciò che viene presentato di seguito, è necessario capire come si articolano le applicazioni web, in particolare si sviluppano su 3 livelli logici:

* *Presentazione*, come viene visualizzato il file, noi usiamo `html` e `css`, è la vera e propria struttura;
* *Intermedio*, gestisce altre cose, tipo cosa fare quando si clicca da qualche parte (*gestione degli eventi*) oppure la vera gestine dinamica della pagina: se si ha una struttura per vedere ad esempio una scheda film, si scrive del codice per generalizzare la scheda, quindi non bisogna scrivere manualmente tutte le specifiche del film della presentazione, ma prenderla dai dati e organizzare ocme essi devono essere visti, noi useremo `javascript`;
* *Dati*, il cuore di tutto, qui vengono scritti i dati che poi verranno interpretati dal livello intermedio e visualizzati dalla presentazione, noi useremo `json`.

## Javascript

Il codice di base lo inseriamo dentro il file di presentazione html, tramite il tag `<script`, che può essere messo prima o dopo il `<body>`; non ci si sofferma su javascript, si piò dire solo che non è chissà quanto diverso *nella pratica* da c o java, anche se i tipi sono davvero tanto diversi.

Per accedere alle parti del file si usa il `DOM`, uno standard che concepisce ogni elemento html come un oggetto, e definisce come accedere, modificare gli elementi html.

Il `DOM` può anche essere visto come un `tree`, concetto strano mai trattato in `C`, però c'è, in sostanza ogni elemento è un nodo, da cui partono nel caso altri nodi figli, che possoo essere qualsiasi cosa, l'importante è vedere il tutto come un albero rovesciato, un esempio può essere: il documento ha come figlio il tag `<html>`, questo ha come figli `<head>` e `<body>`, a loro volta hanno figli tipo `<title>`, `<h1>` etc, e `NodeList` è una collezione di nodi, simile ad un array.

### Cose più usate finora

* `document.write("")`: "scrive" sul documento un numero/stringa/valore di una variabile, chiaramente se è qualcosa di "immediato" poi la stessa cosa verrà visualizzata sulla pagina web, invece se è qualcosa tipo `<img src=...>` non verrà visualizzato il testo, bensì l'immagine ch si sta cercando;
* `getElementbyId(idname)`: chiaramente ritorna l'elemento con quell'id, se non esiste si ha null, spesso si usa quando si istanzia una variabile e si vuole "copiare" il dato presente nel database, tipo un film, con all'interno come attributi tutto il cast, la locandina, la trama etc;
* `getElementsByClassName`: ritorna una lista NodeList di tutti gli elementi con una certa classe, per poi accederci tramite gli indici.
* `innerHTML`: è un attributo/proprietà, si riferisce ad un elemento html, e nello specifico rappresenta ciò che c'è *all'interno dei tag*, si usa nelle parti in javascript spesso (per quanto io ne sappia) per modificare il contenuto testuale di un tag, in questo modo: `nomevariabile.getElementsByTagName('tag')[0].innerHTML=dati.proprietà`, quindi si usa con l'operatore di assegnamento, nella parte dove il valore deve essere inserito.
