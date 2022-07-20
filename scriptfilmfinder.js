//Adding movies + links + posters to the DOM

const selectMovies = document.getElementById("moviechoice");
const movieList= movies;

const addMoviestoDOM = movies.map((movie) => {
  newLi = document.createElement("li");
  selectMovies.appendChild(newLi);
  newA = document.createElement("a");
  newLi.appendChild(newA);
  newA.href = `http://www.imdb.com/title/${movie.imdbID}`;
  newA.target = "_blank";
  newIMG = document.createElement("img");
  newIMG.src = movie.poster;
  newA.appendChild(newIMG);
});

// change/switch on radiobuttons
const radioBTNS = Array.from(document.getElementsByName("movieoption"));

const handleOnchangeEvent = () => {
  radioBTNS.forEach((event) => {
    event.addEventListener("change", (btn) => {
      switch (btn.target.value.toLowerCase()) {
        case "latestmovies":
          console.log(latestMoviesFilter);
          break;
        case "avengermovies":
          console.log("avengermovies work");
          break;
        case "x-menmovies":
          console.log("x-men movies work");
          break;
        case "princessmovies":
          filterMovies("princess");
          break;
        case "batmanmovies":
          console.log("batman movies work");
          break;

        default:
          console.log("default movies works");
      }
    });
  });
};

//searchbar

const searchBar = document.getElementById("searchbar"); 

searchBar.addEventListener("keyup", (press)=>{

  console.log (press.target.value);
  
  })





 


  
