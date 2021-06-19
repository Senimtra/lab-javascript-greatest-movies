// ###################################
// ## Iteration 1: All directors? - ##
// ###################################

// ### Get the array of all directors. ###

function getAllDirectors(movies) {
  const directArr = movies.map((film) => film.director);
  return directArr;
}

// ##############################################
// ## Iteration 2: Steven Spielberg. The best? ##
// ##############################################

// ### How many drama movies did STEVEN SPIELBERG direct? ###

function howManyMovies(movies) {
  const sbergDramas = movies.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  return sbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// #########################################################
// ## Iteration 1.1: Bonus - Clean the array of directors ##
// #########################################################

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
