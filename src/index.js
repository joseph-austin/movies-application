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
////////////////////////////////////////////////////////////////
// import stars from './stars'
//
// stars();

let ids;
getMovies();


const $ = require('jquery');

$(document).ready(
    console.log('JQuery up and running')
);

///////////User Submissions

$('#submit').on('click', function () {
    let title = document.getElementById('named').value;
    // console.log(title);
    // console.log(document.getElementById('named').value);
    let rating = document.getElementById('rated').value;

    let movieAdded = {title: title, rating: rating, id: ids};
    let url = '/api/movies';
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieAdded),
    };
    fetch(url, options)
        .then(/* post was created successfully */)
        .catch(/* handle errors */);
});

//     let title = document.getElementById('named').value;
//     // console.log(title);
//     // console.log(document.getElementById('named').value);
//     let rating = document.getElementById('rated').value;
//
//     let movieAdded = {title: title, rating: rating, id: ids};
//     let url = '/api/movies';
//     let options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(movieAdded),
//     };
//     fetch(url, options)
//         .then(/* post was created successfully */)
//         .catch(/* handle errors */);
// });


////////////////////////////////////////////////////////////////////Morning Notes

// GET on /movies - return list of movies
// POST on /movies - creates a new movie
// GET on /movies/{id} - return details for movie for specified movie
// PUT on /movies/{id} - update specified movie
// DELETE on /movie/{id} - delete specified movie
//
// module.exports = {
//     getMovies: () => {
//         return fetch('/api/movies')
//             .then(response => response.json())
//     },
//     createdMovie: (request) =>
// };

//

////////////////////OMDB



