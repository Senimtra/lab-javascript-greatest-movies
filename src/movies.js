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

// #####################################
// ## Iteration 3: All scores average ##
// #####################################

// ### Get the average of all scores with 2 decimals ###

function scoresAverage(movies) {
  if (!movies.length) {
    return 0;
  } else {
    const noScore = movies.filter((norank) => norank.score);
    const scoreArr = noScore.map((imdb) => imdb.score);
    const sumScores = scoreArr.reduce((sum, score) => sum + score);
    return Number((sumScores / movies.length).toFixed(2));
  }
}

// ###############################
// ## Iteration 4: Drama movies ##
// ###############################

// ### Get the average of Drama Movies ###

function dramaMoviesScore(movies) {
  const dramaFilter = movies.filter((dramas) => dramas.genre.includes('Drama'));
  if (dramaFilter.length === 0) {
    return 0;
  } else {
    const scoreArr = dramaFilter.map((imdb) => imdb.score);
    const sumScores = scoreArr.reduce((sum, score) => sum + score);
    return Number((sumScores / dramaFilter.length).toFixed(2));
  }
}

// ###################################
// ## Iteration 5: Ordering by year ##
// ###################################

// ### Order by year, ascending (in growing order) ###

function orderByYear(movies) {
  const sortArr = [...movies];
  sortArr.sort((a, b) => {
    if (a.year - b.year === 0) {
      if (a.title.localeCompare(b.title) < 0) {
        return -1;
      } else if (a.title.localeCompare(b.title) > 0) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return a.year - b.year;
    }
  });
  return sortArr;
}

// ###################################
// ## Iteration 6: Alphabetic Order ##
// ###################################

// ### Order by title and print the first 20 titles ###

function orderAlphabetically(movies) {
  const titles = movies.map((movie) => movie.title);
  return titles.sort().slice(0, 20);
}

// ######################################
// ## BONUS - Iteration 7: Time Format ##
// ######################################

// ### Turn duration of the movies from hours to minutes ###

function turnHoursToMinutes(movies) {
  const movieMinutes = movies.map((film) => {
    const hours = film.duration.split('h');
    const minutes = film.duration.slice(3, -3);
    return {
      title: film.title,
      year: film.year,
      director: film.director,
      duration: Number(hours[0]) * 60 + Number(minutes),
      genre: film.genre,
      score: film.score
    };
  });
  return movieMinutes;
}

// ####################################################
// ## BONUS - Iteration 8: Best yearly score average ##
// ####################################################

// ### Find the best yearly score average

function bestYearAvg(movies) {
  const resultArr = [];
  movies.forEach((movie) => {
    const filmsByYear = movies.filter((film) => film.year == movie.year);
    const scorePerYear = filmsByYear.reduce((sum, entry) => {
      return sum + entry.score / filmsByYear.length;
    }, 0);
    let resultObj = {};
    resultObj.year = movie.year;
    resultObj.score = scorePerYear;
    resultArr.push(resultObj);
  });
  let resultSort = resultArr.sort((a, b) => b.score - a.score);
  let filterYears = resultSort.filter(
    (year) => year.score === resultSort[0].score
  );
  let finalArr = filterYears.sort((a, b) => a.year - b.year);
  if (!finalArr.length) {
    return null;
  } else {
    return `The best year was ${finalArr[0].year} with an average score of ${finalArr[0].score}`;
  }
}

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
