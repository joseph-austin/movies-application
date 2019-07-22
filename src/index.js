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
let ids;
getMovies()
    .then((movies) => {
        let ids = movies.length + 1;
        console.log(ids);
        $('#userInput').toggleClass('invis');
        $('#head').html('Here are all the movies:');
        $('#load').html('');
        movies.forEach(({title, rating, id}) => {
            console.log(`id#${id} - ${title} - rating: ${rating}/5`);
            $('#movieList').append(`<br><div>id#${id} - ${title} - rating: ${rating}/5 <button type="submit" class="btn btn-primary edit"><i class="fas fa-edit"></i></button> 
<button type="submit" class="btn btn-primary delete"><i class="fas fa-trash"></i></div></button>`);
            $('.edit').click(function () {
                $('body').css('background-color', 'blue');
            });

        });

        //
        //     $('#modal').html(`
        // <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        //         Edit Movies
        //     </button>
        //     <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        //         <div class="modal-dialog" role="document">
        //         <div class="modal-content">
        //         <div class="modal-header">
        //         <h5 class="modal-title" id="exampleModalLabel">Movie Editor</h5>
        //     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        //         <span aria-hidden="true">&times;</span>
        //     </button>
        //     </div>
        //     <div class="modal-body">
        // ...
        // </div>
        //     <div class="modal-footer">
        //         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        //         <button type="button" class="btn btn-primary">Save changes</button>
        //     </div>
        //     </div>
        //     </div>
        //     </div>`
        // )


    })
    .catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });

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
