async function afficherFilms() {
    const reponse = await fetch("./data/moovies.json");
    const films = await reponse.json();
    console.log(films);
    films.forEach(films => {
        let userSection = document.querySelector('.salut');
        userSection.innerHTML += `
 
        <div class="container">
            <div class="row">
                <div class="col">

              <img src="${films.Poster}" class="img-thumbnail" 

                </div>
                
              <div class="col">

            <ul >
                
                <li>${films.Title}</li>
                <li>${films.Plot}</li>
                <li>${films.imdbRating}</li>

            </ul>

            </div>
            </div>
        </div> `
    })
}





afficherFilms()
