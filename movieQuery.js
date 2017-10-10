var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded”, year: “2003", length: 138, rating: "7.2", genre: "sci-fi" },
  { title: "Terminator 2", year: "1991",length :137,rating:"8.5",genre: "action"},
];

function getMovieTitle( index ){
  return movieList[index].title;
}

console.log(getMovieTitle(3));

function addMovie( movie ){
  movieList.push(movie);
  return movieList;
}

var newMovie = {title: "Terminator 2",year: "1991",length :137,rating:"8.5",genre: "action"};
console.log(addMovie(newMovie));

var ratings=[
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded”, year: “2003", length: 138, rating: "7.2", genre: "sci-fi" },
  { title: "Terminator 2", year: "1991",length :137,rating:"8.5",genre: "action"},
];

function movieByRating(ratings){
  ratings.forEach(function (e) {
        console.log('title:' + e.title +
            ';year:' + e.year +
            ';length:' + e.length + ';rating:' + e.rating + ';genre:' + e.genre);
    });
}
ratings.sort(function (x, y) {
    return x.rating < y.rating;
});

console.log(movieByRating(ratings));


function findByTitle( title ){
    //add code
   var searchMovie = [];

   movieList.map(function(movie){
     if(movie.title.toLowerCase().includes(title)){
        searchMovie.push(movie);
     }
   });

   return searchMovie;
  }

  console.log(findByTitle("matrix"));
