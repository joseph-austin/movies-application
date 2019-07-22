/**
 * es6 modules and imports
 */
import sayHello from './hello';

sayHello('World');

/**
 * require style imports
 */
import getMovies from './api.js';


////////////////////////////////////////////////////////////////////Old Request
// getMovies().then((movies) => {
//     console.log('Here are all the movies:');
//     movies.forEach(({title, rating, id}) => {
//         console.log(`id#${id} - ${title} - rating: ${rating}`);
//     });
// }).catch((error) => {
//     alert('Oh no! Something went wrong.\nCheck the console for details.')
//     console.log(error);
// });
////////////////////////////////////////////////////////////////////


getMovies()
    .then((movies) => {
        $('#head').html('Here are all the movies:');
        $('#movieList').html('');
        movies.forEach(({title, rating, id}) => {
            $('#movieList').append(`<br>id#${id} - ${title} - rating: ${rating}`);
        });
    })
    .catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });

const $ = require('jquery');

$(document).ready(
    console.log('JQuery up and running')
);
