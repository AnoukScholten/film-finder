//Adding movies + links + posters to the DOM

const selectMovies = document.getElementById("moviechoice");

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

let radioBTNS = document.getElementsByName("movieoption");
let rbAR = Array.from(radioBTNS);

const handleOnChangeEvent = () => {
  rbAR.forEach((btn) => {
    btn.addEventListener("change", (event) => {
      switch (event.target.value) {
        case "latestmovies":
          console.log("latest works");
          break;
        case "avengermovies":
          "avengersworks";
          break;
        case "xmenmovies":
          console.log("xmen works");
          break;
        case "princessmovies":
          console.log("I do work");
          break;
        case "batmanmovies":
          console.log("batman works");
          break;
        default:
          console.log("default also works");
      }
    });
  });
};

//filtering movies

const filterMovies = (wordINMovie) => {
  let filterdMovies= movies.filter((movie) => movie.title.includes(wordINMovie));
  return filterdMovies
};
