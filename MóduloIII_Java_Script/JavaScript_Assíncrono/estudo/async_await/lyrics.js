// A ideia é usar uma API que faz a busca pra gente enquanto o usuário passa o nome do artista e da música

function findLyrics(artist, song) {
        return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}

const form = document.querySelector('#lyrics_form');
form.addEventListener('submit', el => {
        el.preventDefault();
        doSubmit(); // vou criar uma função para ser chamada no lugar da "submit" padrão
})


// Com .then()
function doSubmit() {
        const lyrics_el = document.querySelector('#lyrics'); // pequei meu elemento lyrics
        const artist = document.querySelector('#artist');
        const song = document.querySelector('#song');

        lyrics_el.innerHTML = '<div class="spinner-grow" role="status"><span  class="sr-only">Carregando...</span></div>'; // esse spinner é do bootstrap, pra ficar uma sensação de carregando...

        findLyrics(artist.value, song.value)
                .then(response => response.json())
                .then(data => {
                        if (data.lyrics) {
                                lyrics_el.innerHTML = data.lyrics;
                        } else {
                                lyrics_el.innerHTML = data.error;
                        }
                })
                .catch(err => {
                        lyrics_el.innerHTML = `Oops! ${err}`;
                })

}


// Com async/await

async function doSubmit() {
        const lyrics_el = document.querySelector('#lyrics'); // pequei meu elemento lyrics
        const artist = document.querySelector('#artist');
        const song = document.querySelector('#song');

        lyrics_el.innerHTML = '<div class="spinner-grow" role="status"><span  class="sr-only">Carregando...</span></div>'; // esse spinner é do bootstrap, pra ficar uma sensação de carregando...

        try {
                const lyricsResponse = await findLyrics(artist.value, song.value);
                const data = await lyricsResponse.json();
                if(data.lyrics)
                        lyrics_el.innerHTML = data.lyrics;
                else
                        lyrics_el.innerHTML = data.lyrics;
        lyrics_el.innerHTML = data.lyrics;
        } catch (err) {
                console.log(err);
        }
        

}