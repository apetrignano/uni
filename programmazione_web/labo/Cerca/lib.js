const indirizzo_base_poster = "https://www.themoviedb.org/t/p/w220_and_h330_face"
const api_key = "2461e2dc84a8e379ad6a8309c585a25d"
const url_base = "https://api.themoviedb.org/3"


function mostraPopolari(popolari) {
    var lista = document.getElementById('lista');
    var master = document.getElementById('master');
    lista.innerHTML = "";
    lista.appendChild(master)
    for (var id_film = 0; id_film < popolari.results.length; id_film++) {
        var clone = master.cloneNode(true);
        clone.id = 'card-film-' + id_film
        clone.getElementsByClassName('card-title')[0].innerHTML = popolari.results[id_film].title;
        clone.getElementsByClassName('card-text')[0].innerHTML = popolari.results[id_film].overview;
        clone.getElementsByClassName('card-date')[0].innerHTML = popolari.results[id_film].release_date;
        clone.getElementsByClassName('card-img-top')[0].src = indirizzo_base_poster + popolari.results[id_film].poster_path;
        clone.getElementsByClassName('btn')[0].href = "scheda_film.html?id_film=" + popolari.results[id_film].id;

        //master.after(clone)
        lista.appendChild(clone);
        clone.classList.remove('d-none')

    }
}