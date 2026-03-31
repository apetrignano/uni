# Lezione 1


**n.b:** il martedì si farà laboratorio, il giovedì teoria; inoltre il pdf 01 (reti) è assolutamente opzionale, è solo per "cultura", perchè poi sono cose che si faranno più avanti e sono importanti.


# Linguagio HTML

Si tratta di un linguaggio di *markup*, serve solo per mostrare in un certo modo un file di testo, quindi stuttura i documenti e vengono *interpretati*, non eseguiti. Di base il linguaggio serve per creare la "facciata" di pagine web, definire regole per visualizzazione etc.

Ogni pagina che si crea, può avere dentro nativamente più linguaggi, cosa particolare rispetto a C o altro

### Browser

Adesso si spiega il browser, un programma per "navigare il web", è composto di tante parti oggi come oggi, tipo layout engine, user interface etc. 

Adesso sta facendo spiegoni di browser, storia di HTML, niente di che.

Durante il corso mi sa che bisognerà pian piano sviluppare l'applicativo moolto simile a TMDB.


Per scrivere una pagina web ci vuole in realtà molto poco, solo un file `.html`; la cosa è appunto strutturarlo obv.

Sono importanti i `tag`, dei *marcatori* di determinate porzioni di testo, che identificano effettivamente cosa sono quelle parti, permettono di personalizzare la pagine, la sintassi standard è `<tag attributi> contenuto </tag>`.

Di seguito viene mostrata una riga di intestazione, che indica le specifiche adottate in modo manuale:
`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01
Transitional//IT">`.

Quando si vuole iniziare a scrivere il codice da visualizzare di fa `<html> .. </html>`, molto semplice.
Il documento `HTML` ha *testa* e *corpo*, la prima contiene delle informazioni non immediate, che dicono come il documento deve essere letto ed interpretato, mentre il secondo contiene il testo che viene visualizzato sul browser, con gli opportuni tag.

## Annidamento
Consiste nell'aprire uno dopo l'altro diversi tag prima di chiudere i primi, nel caso ci siano conflitti la regola è considerare valido l'attributo "più vicino" al comando.

**n.b**: è importante che non bisogna sapere a memoria tutti i tag, ad eccezione di queli davvero importanti, che poi sono anche gli unici che chiede all'esame; i tag e gli attributi andrebbero ricercati in autonomia, il prof consiglia `w3school`.

## Testa 

Come detto prima, contiene elementi non propriamente contenuti nel documento, appunto *metadati*, servono per fare il rendering della pagina; adesso si vedranno i tag propri della testa/head:
- title: indica il titolo della pagina, visualizzato in alto a sx del browser;
- metadati: il tag è `<meta>`, definisce informazioni della pagina, non contenuto ovviamente, non ha nemmeno tag di chiusura, un esempio è `<META NAME = "author" CONTENT="Claudio">`, un vecchio reatggio della prima versione di HTML.
- HTTP-EQUIV, è un attributo, non tag, dà informazioni sulla comunicazione server-browser, credo dice come e cosa trasferire.

## Corpo

È quello che noi vediamo, ed ha tutte le informazioni per la visualizzazione della pagina; vediamo i tag interni al corpo/body.

Ricordarsi la differenza tra i tag *block level* e gli *inline*.
Ha spiegato i principali tag: `h1, h2, ..., h6`, `span`, `div`, `p`; gli *span* sono dei *blocchi di frasi*, che vengono trattati appunto in blocco, ma non come paragrafi, quindi non si va a capo quando si mette; il tag `div` invece lo useremo molto di più, serve per indicare delle vere e proprie aree della pagina, viene definito un *blocco contenitore*, mentre span *contenitore generico*.

#### Importanza del tag `div`
Presentiamo un esempio, dobbiamo creare una pagina web, essa dovrà avere delle "sezioni", tipo il menù navigazione, una sidebar, una parta alta con il titolo o il logo, etc., per fare ciò si userà proprio il tag, dando un *id* a queste parti del testo, ad esempio:
```html
<div id="container">
<div id="header">
<div id="navigation"></div>
</div><!--#header-->
<div id="main"></div>
<div id="sidebar"></div>
<div id="footer"></div>
```

### Stili di testo
Sono suddivisi in stili *fisici*(sup, b, ...h) e *logici*(abbr, address, cite, samp), oltre ai font; attenzione però: in realtà ora questi dettagli grafici non vengono più modificati con html, ma con css o altro. Poi ci sono anche gli elenchi, di ogni tipo, il profe non li spiega, come non ha nemmeno fatto con i font, colori o dimensioni del testo, dobbiamo vederceli da noi, bello sbatti.

Il prof ha anche parlato un botto degli elenchi puntati, che prima venivano usati come navbar, vorrei tanto averlo ascoltato.

## Collegamenti ipertestuali

Sono ciò che rende diverso un file web con un cazzo di foglio di carta, si può viaggiare tra un file ed un altro schiacciando su una parola, detto formalmente, bisogna schiacciare su un *link*, il quale è composto di due componenti, il *contenuto* che nasconde il documento e la risorsa puntata.

*fun fact:* in Italia la roba che ha reso famoso l'ipertesto è stato Mani Pulite, per velocizzare l'accesso agli atti del processo.
##### Sintassi
```html
<a href = "indirizzo"> qui </a> per visualizzare il collegamento.
```
- *qui* è la testa del link;
- *indirizzo* è la coda;
- *href* definisce l'indirizzo a cui recarsi una volta premuto il link.

L'indirizzo non per forza è un altro file *html*, può anche trattarsi di immagini, documenti, pdf, tutti aperti nel browser, oppure file compressi, che richiedono un download prima di poterli visualizzare; da un po' di tempo html può avere come href anche i protocolli, tipo le mail.

##### Esempi
```html
<a href "destinazione.html"> clicca qui</a>

<a href "nome_immagine.jpg"> clicca qui</a>

<a href=mailto:studente@studenti.unimi.it> mandami un'email a </a>

```
### Percorsi dei link

Chiaramente bisogna indicare il percorso che porta al file a cui si vuole arrivaredal link, di base è abbastanza comodo perchè non bisogna specificarlo se esso si trova nella stessa cartella del `main.html`, in generale specificare il percorso rispetto alla pagina web si chiama *percorso relativo*, mentre farlo a partire dalla cartella di base `~/`si chiama *percorso assoluto*, un po' come si tratta il cd a partire dalla cartella root.

Il prof non è che si è messo a spiegare tutti i comandi per gestire i link, però con l'annidamento si può modificare il colore o font di uno specifico link, ha spiegato l'esistenza di *ancore*, che sono semplicemente dei link ipertestuali che portano a un "punto di aggancio", chiamato *ancora*, all'interno del file stesso, comodo per gestire gl indici o cose così.


## Tabelle
Qui non c'è molto da dire, si riporta semplicemente come si usano:
 - `<tr> ... </tr>` serve per definire cosa viene scritto in una riga, per gestire invece il contenuto di ogni colonna della riga si usa un altro comando;
 - `<td> ... </td>` gestisce appunto il contenuto della singola cella;
 - `<th> ... </th>` è un *table header*, in sostanza quando si usa si crea una nuova riga, il contenuto viene messo in grassetto e centrato rispetto alla prima cella, tutto qui;
 - `<caption> ... </caption>` invece si usa per definire appunto la descrizione della tabella stessa, esattamente come si fa in LaTeX.

## Form

Questi sono abbastanza importanti, come è già evidente serve per *collezionare input da utente*, basato sull'elemento `form`; specifica tanti elementi diversi.

Vediamo ora di cosa si tratta:

#### Elemento input
È il più importante, il quale racchiude tutti gli attributi type più usati: text, checkbox, radio button etc, che ora si tratteranno in modo decisamente più approfondito.

##### Text input
Definisce semplicemente una riga di testo in cui scrivere, c'è la variante per inserire la password:
```html
<form>
  <input type="text" name="dato1">
  <br>
  <input type="password" name="password">
</form>

```

##### Textarea
Questo invece definisce un vero e proprio *campo di testo*, non solo una linea, ma varie.
```html
<textarea name="area" rows="10" cols="10"> The cat was playing in the garden. </textarea>
```
Come si può notare, esso è indipendente da form, e si può inserire anche un testo all'interno della casella.

##### Radio button
Questo invece va all'interno del "form", consiste nella selezione di solo una tra le opzioni disponibili, quindi diverso dalla "checkbox" (nota bene: si può aggiungere un attributo `checked` per indicare la scelta predefinita).
```html
<form>
  <input type="radio" name="sesso" value="molto" checked> Molto <br>
  <input type="radio" name="sesso" value="poco"> Poco <br>
  <input type="radio" name="sesso" value="mai"> Mai
</form>
```

##### Checkbox input
Diciamo che d'ora in poi non ha nemmeno molto senso dire che cosa fanno tutte queste opzioni, è lapalissiano.
```html
<form>
  <input type="checkbox" name="scelta1" value="#1"> Numero 1 <br>
  <input type="checkbox" name="scelta2" value="#2"> Numero 2 <br>
  <input type="checkbox" name="scelta3" value="#3"> Numero 3

</form>
```

##### Drop-down list
Menùù a tendina.
```----------
<select name="cars">
  <option value="1"> macchina 1 </option>
  <option value="2"> macchina 2 </option>
  <option value="3"> macchina 3 </option>
</select>
```

##### Submit button
```html
<form action="action_page.php">
First name:<br>
<input type="text" name="firstname" value="Mickey">
<br>
Last name:<br>
<input type="text" name="lastname" value="Mouse">
<br><br>
<input type="submit" value="Submit">
</form>
```
`<input type="submit"` quindi definisce un bottone per "sottomettere il form ad un handler", in altre parole si passano i dati ad una pagina lato server(l'handler appunto), la quale processa i dati del form; questo handler è definito, come si vede nell'esempio, dall'attributo `action`.

##### Fieldset
Questo serve solo per "racchiudere" tutti i vari campi del form in un riquadro:
```html
<fieldset>
<legend>Personal information:</legend>
</fieldset>
```

#### Attributi


Sono stati presentati, senza specificarli, degli attributi che è doveroso conoscere, quindi ora si presentano in modo esplicito.

- `action`, definisce le azioni che devono essere fatte quando viene inviato il form, di solito i dati devono essere inviati ad una pagina web lato server, se però l'attirbuto viene omesso si considera di default la pagina corrente.
- `method`, specifica l'operazione HTTP, quindi `get` o `post`, da usare per effettivamente inviare il form, *get* viene usata per invio dei cosiddetti *form passive*, che non contengono informazioni sensibili, tipo search engine query, inoltre è l'operazione di default in assenza di ulteriori istruzioni, tra l'altro i dati, dato che non sono sensibili, vengono diretamente visualizzati nell'indirizzo, ecco un esempio: `action_page.php?firstname=Mickey&lastname=Mouse`, il *get* è ottimo per picocle quantità di dati; *post* invece è utile quando i dati non devono essere visbili nell'indirizzo.
- `name`, ogni attributo deve avere un nome, non è importante quale, però deve esserci, come abbiamo visto prima.


# Lezione 2


# CSS

Descritto in modo molto semplice, è un altro linguaggio di markup, che nello specifico si occupa esclusivamente di gestire lo stile di visualizzazione/formattazione, lasciando il compito di gestire struttura e contenuto all'HTML, secondo il principio fondamentale di dividere il più possibile il problema in tanti sottoproblemi. Chiaramente esso non si occupa solo di gestire il font ed il colore, ma la presentazione del sito a 360 gradi, inoltre con poche modifiche si cambia tutto il file, ad esempio: se ho 300 pagine del file, con html puro dovrei impostare uno sfondo per ogni pagina, con CSS è sufficiente cambiare una riga nel file `css`.

## Meccanismi, costrutti e selettori

Il file `.css` viene chiamato *foglio di stile*, il quale è un insieme di regole, le quali hanno tutte la stessa struttura:
- *selettore*, dice cosa deve cambiare;
- *blocco delle dichiarazioni*, dice come modificare l'oggetto puntato, secondo una regola precisa, si indica la proprietà ed il valore.

#### esempio
```css
h1 {color: white; background: red}
```
Chiaramente `color` e `background` sono le proprietà, il resto i valori, mentre `h1` è il selettore; inoltre dall'esempio si nota che è possibile fare più dichiarazioni nello stesso blocco, a patto di separarle con `;`.

### Selettori più nel dettaglio

Esso è costituito da qualsiasi elemento di html, riferito spesso con tag selector anzichè i type selector; inoltre si possono creare delle *combinazioni di elementi*:

- `elemento1 elemento 2: {}` seleziona tutti gli *elemento2* contenuti in *elemento1*;
- `elemento1>elemento2: {}` seleziona tutti gli *elemento2* che hanno come padre un *elemento1*;
- `elemento1 + elemento2: {}` seleziona tutti gli *elemento2* che hanno come padre un *elemento1*

Oltre a ciò, aggiungendo subito dopo il selettore le parentesi quadre `[attributo]` vengono selezionati gli elementi di quel tipo con lo specifico attributo, in più ci sono altri dettagli sulla sintassi che però non scriverò perchè già presenti nelle slides.

### Selettori speciali

Si tratta di selettori un po' più particolari, che rendono molto potente *css*, sono due:
- Selettore `class`
- Selettore `id`
Essi devono essere associati ad uno stylesheet, non possono essere all'interno del file html.

#### Selettore `class`

Servono per non mappare un tag intero, ma solo alcuni che hanno una specifica *classe*, che non è altro che il nome di un selettore che scegliamo nome, solitamente esso descrive proprio il significato del testo, poi si vedrà un esempio, esso è preceduto da un punto fermo `.`

##### Esempio

``` css
<style type="text/css">
.testorosso {
  font:12px Arial, Helvetica, sans-serif;
  color: #FF0000;
}
</style>
```
Quindi questo `css` si riferisce solo ad alcuni elementi del file html che noi vogliamo sia di questo tipo, che definiremo nel "main" con il tag testorosso, di seguito viene riportato come ci definiremo ad esso nelll'*html*:
```css
<p class="testorosso"> ... </p>
```

#### Pseudo classi

Servono per definire lo stato di un certo elemento, ad esempio `:active` per selezionare ed impostare lo stile di alcuni elementi *attivi*, ad esempio quando viene cliccato un testo con li mouse, usato tanto, ma non solo, per i link:

- `:link` per pagine non visitate;
- `:visited` per pagine visitate;
- `:hover` quando il mouse passa sopra il link.

#### Selettore `id`

Essi invece identificano lo stile di un singolo elemento dentro la pagina `html`, usato solo quando c'è la certezza che un elemento compaia una singola volta e basta; il nome viene preceduto da `#`.

##### Esempio

```css
<style type?"text/css">
#testorosso {
  font: 12px Arial, Helvetica, sans-serif;
  color: #FF0000;
}
</style>
```
E si utilizza così:
```css
<p id="testorosso"> ... </p>




```

# Qui va aggiuntla parte sulle box model, è una domanda da esame, stra importante ricorda!!!!

## Box model

Ogni elemento di html è considerata una *box*, con associati 4 valori personalizzabili:

- ´margin´, "libera" un'area attorno al border;
- ´border´, semplicemente un bordo che circonda il content ed il padding;
- ´padding´, trasparente, "libera" un'area intorno al content;
- ´content´, che è effettivamente il contenuto della box,dove ci sono i testi e le immagini.
## Formattare un testo con CSS

Adesso vengono elencate in modo abbastanza noioso le font family, font size, lenght, box model, border, margin, padding, flow layout, eccetera.

## Definire la struttura della pagina

Ora non si usa più la struttura tabella di html, bensì `css`, non si vedrà come fare con il primo strumento perchè non ha senso, quindi guardiamo direttamente il secondo:

#### `main.html`
```html
<div id="container">
  <div id="header"
    <div id"navigation"></div>
  </div>
  <div id="sidebar"></div>
  <div id="main"></div>
  <div id="footer"></div>
</div>
```

#### `stili.css`

```css
#container {
  width:1040px;
  margin:0 auto;
}
#header {
  width:1000px;
  height:140px;
  background-color:#A4A875;
  padding:10px;
  margin:10px;
  position:relative;
}
#navigation {
  width:980px;
  height:70px;
  background-color:#DCDCDA;
  margin:10px;
  position:absolute;
  bottom:10px;
}
#main {
  width:700px;
  height:300px;
  float:left;
  background-color:#47834B;
  margin:10px;
}
#sidebar {
  width:300px;
  height:300px;
  float:right;
  background-color:#72C29B;
  margin:10px;
}
#footer {
  clear:both;
  width:1000px;
  height:70px;
  background-color:#C4C4C4;
  padding:10px;
  margin:10px;
}
```
Qui non si vede il risultato, però dalle slides, la 133 della lezione su `css`, è evidente che il tutto è molto più modificabile rispetto all'html puro, anche se non sembra è anche più semplice.


# Lezione 3

Non so dove aggiungere questo dettaglio, ma c'è da ricordare che il ´flex´ non si eredita più in là di un livello, quindi nella lezione precedente bisogna aggiungere la parte sull'ereditarietà, ricorda.

# Bootstrap

Uno dei problemi principali per quanto riguarda la creazione di pagine web è l'adattabilità al dispositivo: chiaramente non è la stessa cosa vederla dal computer e dal cellulare, le pagine che cambiano in funzione dello schermo si dicono *reattive* oppure *responsive*, e per fare ciò noi useremo *bootstrap*, che è un framework, ossia librerie che permettono di fare ciò in modo facile, si ricorda che per ora si sta parlando solo di front-end ovviamente.
La domanda che sorge spontanea è: come si utilizza? Si può fare in due modi: scaricarlo ed usarlo oppure includerlo nel con la versione online di bs, in questo modo:

Bisogna afre una considerazione doverosa: *bootstrap* è una libreria, che in teoria va a sostituire il "css puro" che si è usato la volta scorsa, stiamo andando così ad introdurre strumenti che semplificano la progettazione di una pagina web, pertanto ci si può azardare a dire che bootstrap non è un qualcosa di separato dal css, è solo un modo di usare il css in maniera semplice.
```
<!-- Ultimo CSS Bootstrap compilato e minimizzato -->
<link rel="stylesheet"href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
```

Sta roba qui si usa in modo diverso anche per javascript bootstrap.

Per vedere come fare certe cose si utilizzerà tantissimo il "manuale online" di bs, che è *getbootstrap.com*

Facendo come scritto sopra, si include una libreria (*css* in questo caso) con tantissime cose, il prof ha fatto vedere che sono 12.000 righe, a questo punto bisogna capire come funzionano e comne usarl) con tantissime cose, il prof ha fatto vedere che sono 12.000 righe, a questo punto bisogna capire come funzionano e comne usarle.

Di seguito viene presentato come modificare la pagina con bs con i commenti:


```css
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bootstrap demo</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-
QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<h1>Hello, world!</h1>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-
YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
```

Bootstrap è un sistema a griglie, che consente fino a 12 colonne in una pagina, che si organizzano in modo automatico a seconda delle dimensioni dello schermo; nel caso non servano 12 griglie esser si possono "unire" per creare delle colonne più grandi: 
```html
<div class="col-md-6">Intervallo 6</div><div class="col-md-6">Intervallo 6</div>
```
Il risultato è che ci saranno due colonne, ognuna delle dimensioni di 6 colonne "standard"; quando si mette nell'html un div si applica direttamente la classe col; detto così sembra molto limitativo, tuttavia queste griglie sono estremamente personalizzabili, ad esempio innestare griglie in colonne o avere delle colonne in *offset* (hai fatto fisica sai cosa significa), la cosa importante è che la somma delle dimensioni delle colonne utilizzate sia 12.

Poi ha parlato dei *breakpoint*, che sono dei valori per ora usati per la visualizzazione di colonne, ci sono 6 livelli, da xs a xxl, per ogni livello, se la pagina si trova su uno schermo con un numero di pixel orizzontalmente e/o verticalmente sotto un valore limite, le colonne non vengono più viste affiancate, bensì impilate.

A questo punto il prof dice di togliere dal cv dettagli scomodi, tipo la width, etc.
