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

$('#edit').click(function (e) {
    e.preventDefault();
    console.log('worked');
    return fetch('/api/movies').then(response => response.json())
        .then((movies) => {
            let ids = movies.length + 1;
            let poster;
            let info;
            let movieId, movieOldTitle, movieOldRating;
            $('#editBox').append(`
            <div class="row">
            <div class="col">
            <h1>Rating</h1>
            </div>
           <div class="col">
             <h1>Movie Title</h1>
           </div>
         </div>
         </form>`);

            movies.forEach(({title, rating, id}) => {
                console.log(`id#${id} - ${title} - rating: ${rating}/5`);


                $('#editBox').append(`
         <div class="row">
           <div class="col">
             <input type="text" class="form-control" id="editorRate${id}">
           </div>
           <div class="col">
             <input type="text" class="form-control" id="editorTitle${id}">
           </div>
           <div class="col">
                   <button type="submit" class="editSubmit btn btn-primary" onclick="location.reload();" id="${id}" class="btn btn-primary">Submit</button>
                   <button type="submit" class="editDelete btn btn-primary" onclick="location.reload();" id="${id}" class="btn btn-primary">Delete</button>
</div>
         </div>
         </form>`);
                $(`#editorRate${id}`).attr({value: rating});
                $(`#editorTitle${id}`).attr({value: title});


                ////////////
                $('.editSubmit').click(function (e) {
                    e.preventDefault();

                    console.log($(this).attr('id'));
                    let logger = ($(this).attr('id'));
                    let rating = $(`#editorRate${logger}`).val();
                    let title = $(`#editorTitle${logger}`).val();
                    console.log(title);
                    console.log(rating);

                    let movieEdited = {title: title, rating: rating, id: logger};
                    console.log(movieEdited);
                    let url = `/api/movies/${logger}`;
                    console.log(url);
                    let options = {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(movieEdited),
                    };
                    fetch(url, options)
                        .then()
                        .catch();
                });

                $('.editDelete').click(function (e) {
                    e.preventDefault();
                    let logger = ($(this).attr('id'));
                    let url = `/api/movies/${logger}`;
                    console.log(url);
                    let options = {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    };
                    fetch(url, options)
                        .then()
                        .catch(/* handle errors */);
                });
            });
            $('#edit').css('display', 'none');

        });


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

// <<<<<<< HEAD
//
// =======
// const OMDBPull = () => {
//     return fetch('http://www.omdbapi.com/?apikey=' +OMDBKey+'&\n').then(response => response.json())
//         .then((movies) => {
//             let ids = movies.length + 1;
//             console.log(ids);
//             $('#userInput').toggleClass('invis');
//             $('#head').html('Here are all the movies:');
//             $('#load').html('');
//             movies.forEach(({title, rating, id}) => {
//                 console.log(`id#${id} - ${title} - rating: ${rating}/5`);
//                 $('#movieList').append(`<br><div id="${id}">id#${id} - ${title} - rating: ${rating}/5 <button type="submit" class="btn btn-primary edit"><i class="fas fa-edit"></i></button>
// <button type="submit" class="btn btn-primary delete" onclick="location.reload();"><i class="fas fa-trash"></i></button></div>`);
//             });
// >>>>>>> parent of b7c2b2f... pulled info from OMDB, need to ,make it pretty

///////////////////Changed

