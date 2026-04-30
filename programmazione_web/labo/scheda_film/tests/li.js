const api_key = "0a445616bb0263bfbe8d3c1e4db72fc8";


function cambioLingua() {
    mostraPopolari();
}

function cambioPagina() {
    mostraPopolari();
}

function mostraPopolari() {

    var modello = document.getElementById('modello'); // creo una variabile che abbia come valore l'elemento del file html con l'id modello, nel nostro caso la card
    var body = document.getElementById('body'); // si crea una variabile
    body.innerHTML = "";
    body.append(modello); //serve per non usare la funzione pulisciDiv

    //pulisciDiv();

    var page = document.getElementById('page').value; // questa cosa prende il valore del form con il numero della pagina, che appunto ha come id 'page', e lo inserisce nella variabile page(lo stesso nome di id e variabile è obv casuale)
    var lang = document.getElementById('lingua').value;

    fetch(`https://api.themoviedb.org/3/movie/popular?page=${page}&language=${lang}&api_key=${api_key}`) // va a connettersi con il database
        .then(response => response.json()) // converte il dato da .json a variabile js
        .then(popolari => { // assegna il valore nella variabile "popolari"

            //var modello = document.getElementById('modello'); // creo una variabile che abbia come valore l'elemento del file html con l'id modello, nel nostro caso la card

            for (let i = 0; i < popolari.results.length; i++) {
                var film = popolari.results[i]; // creo una variabile con contenuto solo il singolo film trattato attualmente nel ciclo

                var clone = modello.cloneNode(true); // istanza di una variabile assolutamente uguale al modello di card, serve cloneNode perchè è un oggetto html
                /* 
                n.b: nelle prossime righe si userà getElementByTagName('')[0], quindi un array, perchè, come dalle slides lette, si sta operando con nodelist, tipo arrays
                     si vuole modificare ed aggiungere il contenuto di una parte html, quindi pefforza bisogna usare nodi
                */

                clone.getElementsByTagName('img')[0].src += film.poster_path; // aggiungo all'indirizzo generico quello specifico per la locandina
                clone.getElementsByTagName('h5')[0].innerHTML = film.title; // dentro all'h5 della card si sostituisce il contenuto di film.title
                clone.getElementsByTagName('p')[0].innerHTML = film.overview; // stessa cosa di h5
                clone.getElementsByTagName('a')[0].href += film.id;
                //clone.getElementByTagName('a')[0].href += film.id + "lang=" + lang;
                clone.classList.remove('d-none'); // dato che ho avuto problemi a capire sta cosa, qua sotto si fa un commento più dettagliato (thx chatgpt)
                /*
                classList in sostanza serve a gestire le classi di clone, che in questo caso è la colonna con all'interno la card, tramite il metodo remove si toglie dalle calssi css presenti in clnoe quello che c'è tra le parentesi.
                Nel caso specifico, dato che di base la colonna è nascosta, togliendo d-none si va effettivamente a mostrare la colonna
                */
                clone.id = i; // si sostituisce l'id del modello con il numero progressivo
                modello.before(clone);  // in sostanza è un comando che inserisce il clone, in questo caso un oggetti html, prima di modello nel DOM, questo non me lo so proprio spiegare ma tant'è


            }


        });

};

function aggiornaTasti() {

}

function aggiornaPopolari() {


}

function ricerca() {


    var modello = document.getElementById('modello');
    var body = document.getElementById('body');
    body.innerHTML = "";
    body.append(modello);

    if (document.getElementById("ricerca_film").value == "") {
        mostraPopolari();
    } else {
        var query = document.getElementById("ricerca_film").value;
        var lang = document.getElementById('lingua').value;

        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&language=${lang}&api_key=${api_key}`)
            .then(res => res.json())
            .then(risultati => {

                 for (let i = 0; i < risultati.results.length; i++) {
                    var film = risultati.results[i];

                    var clone = modello.cloneNode(true);

                    clone.getElementsByTagName('img')[0].src = "https://media.themoviedb.org/t/p/w440_and_h660_face" + film.poster_path;
                    clone.getElementsByTagName('h5')[0].innerHTML = film.title;
                    clone.getElementsByTagName('p')[0].innerHTML = film.overview;
                    //clone.getElementsByTagName('a')[0].href += film.id;
                    clone.getElementsByTagName('a')[0].href = "scheda_film.html?id=" + film.id;
                    clone.classList.remove('d-none');
                    clone.id = i;
                    modello.before(clone);

                }
                /*
                n.b: si poteva anche fare mostrapopolari, tanto a noi interessa aggiungere delle variabili per la prima parte di fetch, poi è uguale
                */

            });
    }
}

function prossimaPagina() {
    if(contatore < 500) {
        contatore++;
        aggiornaTasti();
        aggiornaPopolari();
    }
}

function precedentePagina() {
    if(contatore > 1) {
        contatore--;
        aggiornaTasti();
        aggiornaPopolari();
    }
}