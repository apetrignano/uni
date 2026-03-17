# Lezione 1


**n.b:** il martedì si farà laboratorio, il giovedì teoria; inoltre il pdf 01 (reti) è assolutamente opzionale, è solo per "cultura", perchè poi sono cose che si faranno più avanti e sono importanti.



# Linguaggio HTML

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

Da un po' di tempo html può avere come href anche i protocolli, tipo le mail.
