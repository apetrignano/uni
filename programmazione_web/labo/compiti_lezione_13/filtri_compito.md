# Soluzioni con i filtri per la lezione 13

## Esercizio 1: ricerca di film per titolo

```javascript
db.movies.find({
  title: {
    $regex: "<titolo>",
    $options: i
  }
})

```

## Esercizio 2: ricerca di film per anno di produzione

```javascript
db.movies.find({
  year: <anno>
})
```

## Esercizio 3: ricerca di film compresi tra due anni

```javascript
db.movies.find({
  year: {
    $gt: <anno_minore>,
    $lt: <anno_maggiore>
  }
})
```

## Esercizio 4: ricerca di film compresi tra due anni e per titolo

``` javascript
db.movies.find({
  $and: [
    {year: {
      $gt: <anno_minore>,
      $lt: <anno_maggiore>
    }},
    {title: {
      $regex: "<titolo>",
      $options: "i"
    }}
  ]
})
```

## Esercizio 5: ricerca di un film in un range di anni per titolo, che non ha un'altra parola nel titolo

```javascript
db.movies.find({
  year: {
    $gt: <anno_minore>,
    $lt: <anno_maggiore>
  },
  title: {
    $regex: "<titolo>",
    $options: "i",
    $ne: "<parola_da_escludere>"
  }
})
```

## Esercizio 6: verifica esistenza utente con una certa email e password

Tosta, è da integrare, perchè si modifica proprio il metodo, da `get` a `post`.

```javascript


```


