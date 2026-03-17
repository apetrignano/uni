# Lezione 1


n.b: il martedì si farà laboratorio, il giovedì teoria; inoltre il pdf 01 (reti) è assolutamente opzionale, è solo per "cultura", perchè poi sono cose che si faranno più avanti e sono importanti.



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


