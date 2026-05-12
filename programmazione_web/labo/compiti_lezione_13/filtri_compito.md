# Soluzioni con i filtri per la lezione 13

## Esercizio 1: ricerca di film per titolo

```
db.movies.find({
  title: {
    $regex: "<titolo>",
    $options: i
  }
})

```

## Esercizio 2: ricerca di film per anno di produzione

```
db.movies.find({
  year: <anno>
})
```

## Esercizio 3: ricerca di film compresi tra due anni

```
db.movies.find({
  year: {
    $gt: <anno_minore>,
    $lt: <anno_maggiore>
  }
})
```

## Esercizio 4: ricerca di film compresi tra due anni e per titolo

```
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
