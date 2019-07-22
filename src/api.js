const getMovies = () => {
    return fetch('/api/movies').then(response => response.json())
        .then((movies) => {
            let ids = movies.length + 1;
            console.log(ids);
            $('#userInput').toggleClass('invis');
            $('#head').html('Here are all the movies:');
            $('#load').html('');
            movies.forEach(({title, rating, id}) => {
                console.log(`id#${id} - ${title} - rating: ${rating}/5`);
                $('#movieList').append(`<br><div id="${id}">id#${id} - ${title} - rating: ${rating}/5 <button type="submit" class="btn btn-primary edit"><i class="fas fa-edit"></i></button> 
<button type="submit" class="btn btn-primary delete" onclick="location.reload();"><i class="fas fa-trash"></i></button></div>`);
            });

            $('.edit').click(function () {
                // $(this).parent().html('');
                let movieId, movieOldTitle, movieOldRating;
                movieId = $(this).parent().attr("id");
                console.log(movieId);
                movieOldTitle = movies[movieId - 1].title;
                movieOldRating = movies[movieId - 1].rating;
                console.log(movieOldRating);
                console.log(movieOldTitle);

                $(this).parent().append(`<br><div>id#${movieId} -<form>
             <div class="row">
               <div class="col">
                 <input type="text" class="form-control" id="editorRate${movieId}">
               </div>
               <div class="col">
                 <input type="text" class="form-control" id="editorTitle${movieId}">
               </div>
             </div>
             <button type="submit" id="submitEdit" class="btn btn-primary">Submit Changes</button>
             </form>`);
                $(`#editorRate${movieId}`).attr({value: movieOldRating});
                $(`#editorTitle${movieId}`).attr({value: movieOldTitle});

                $('#submitEdit').click(function () {
                    let title = document.getElementById("editorTitle" + movieId).value;
                    let rating = document.getElementById('editorRate' + movieId).value;

                    let movieEdited = {title: title, rating: rating, id: ids};
                    console.log(movieEdited);
                    let url = '/api/movies/' + (movieId);
                    console.log(url);
                    let options = {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(movieEdited),
                    };
                    fetch(url, options)
                        .then(/* post was created successfully */)
                        .catch(/* handle errors */);
                });
            });

            $('.delete').click(function () {
                let movieId = $(this).parent().attr("id");
                console.log(movieId);

                // let movieEdited = {title: title, rating: rating, id: ids};
                // console.log(movieEdited);
                let url = '/api/movies/' + (movieId);
                console.log(url);
                let options = {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                    // body: JSON.stringify(movieEdited),
                };
                fetch(url, options)
                    .then(/* post was created successfully */)
                    .catch(/* handle errors */);
            });


////////////////////Delete Button Func
            //     $('#reset').on('click', function () {
            //         // let movieId = $(this).parent().attr("id");
            //         // console.log(movieId);
            //
            //         // let movieEdited = {title: title, rating: rating, id: ids};
            //         // console.log(movieEdited);
            //         let url;
            //         let options;
            //         for (let i = movies.length; i > 0; i--) {
            //             url = '/api/movies/' + (i);
            //             console.log(movies.length);
            //             console.log(url);
            //             options = {
            //                 method: 'DELETE',
            //                 headers: {
            //                     'Content-Type': 'application/json',
            //                 }
            //                 // body: JSON.stringify(movieEdited),
            //             };
            //         }
            //
            //         fetch(url, options)
            //             .then(function () {
            //             let resetStuff = {
            //                 "title": "Star Wars: A New Hope",
            //                 "rating": "5",
            //                 "id": 2
            //             };
            //                 resetStuff += {
            //                 "title": "Casablanca",
            //                 "rating": "4",
            //                 "id": 1
            //             };
            //             console.log(resetStuff);
            //             let url = '/api/movies';
            //             let options = {
            //                 method: 'PATCH',
            //                 headers: {
            //                     'Content-Type': 'application/json',
            //                 },
            //                 body: JSON.stringify(resetStuff),
            //             };
            //             fetch(url, options)
            //                 .then(/* post was created successfully */)
            //                 .catch(/* handle errors */)
            //         })
            //         .catch(/* handle errors */);
            // })

            //////////////////////////////////

//     })
//         .then(function (){
//         let resetStuff =[{
//         "title": "Casablanca",
//             "rating": "4",
//             "id": 1
//     },
//     {
//         "title": "Star Wars: A New Hope",
//         "rating": "5",
//         "id": 2
//     }];
//     let url = '/api/movies';
//     let options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(resetStuff),
//     };
//     fetch(url, options)
//         .then(/* post was created successfully */)
//         .catch(/* handle errors */);
// })


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

};


export default getMovies