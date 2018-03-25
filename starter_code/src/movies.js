/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function (elem) {
    var hours = 0;
    var minutes = 0;
    if (elem.duration.indexOf('h') !== -1) {
      hours = parseInt(elem.duration[0], 10) * 60;
    }
    if (elem.duration.indexOf('min') !== -1) {
      minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
    }
    return Object.assign({}, elem, { duration: hours + minutes });
  });
}
turnHoursToMinutes(moviesArray);

// Get the average of all rates with 2 decimals 

function ratesAverage(moviesArray) {
  var suma = moviesArray.reduce(function(acumulador, current){
       return acumulador + Number(current.rate);
       }, 0);
       return Math.round(suma / moviesArray.length * 100) / 100;
      }	 
      


// Get the average of Drama Movies

function dramaMoviesRate (moviesArray) {
  
  
  var dramaList = moviesArray.filter (function(element){
  
    if (element.genre.indexOf("Drama") !== -1) {
      return true;
    } else {
      return false;
    }
  });
  if (dramaList.length == 0) {    
    return undefined;  
}
return ratesAverage(dramaList);
}

// Order by time duration, in growing order


function orderByDuration (moviesArray) {
  moviesArray.sort(function (a, b) {
      if (a.duration === b.duration) {
          if (a.title > b.title) {
              return 1;
          }
      }
      return a.duration - b.duration;
  });
  return moviesArray;
}



// How many movies did STEVEN SPIELBERG





// Order by title and print the first 20 titles

function orderAlphabetically(moviesArray){
  moviesArray = moviesArray.sort(function(a, b){
     if (a.title > b.title) {
       return 1;
     }
    })
    moviesArray = moviesArray.slice(0, 20);
    return moviesArray;
  }


// Best yearly rate average
