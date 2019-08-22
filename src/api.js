const OMDBPull = (title) => {
    return fetch('http://www.omdbapi.com/?i=tt3896198&apikey=dc518b7c&t=' + title)
        .then(response => response.json())
};

const getMovies = () => {
    return fetch('/api/movies').then(response => response.json())
        .then((movies) => {
            let ids = movies.length + 1;
            let poster;
            let info;
            let movieId, movieOldTitle, movieOldRating;


            console.log(ids);
            $('#userInput').toggleClass('invis');
            $('#head').html('Here are all the movies:');
            $('#load').html('');
            movies.forEach(({title, rating, id}) => {
                console.log(`id#${id} - ${title} - rating: ${rating}/5`);
                OMDBPull(title)
                    .then(function (movieInfo) {
                        console.log(movieInfo);
                        let tix;
                        switch (Number(rating)) {
                            case 5:
                                tix = `
            <div class="star star1 col-xl-2 col-sm-6" title="Poor" data-value="1"> 
                <i class="fa fa-ticket-alt fa-fw"></i> 
            </div> 
            <div class="star star2 col-xl-2 col-sm-6" title="Fair" data-value="2"> 
                <i class="fa fa-ticket-alt fa-fw"></i> </div> 
            <div class="star star3 col-xl-2 col-sm-6" title="Good" data-value="3"> 
                    <i class="fa fa-ticket-alt fa-fw"></i> </div> 
            <div class="star star4 col-xl-2 col-sm-6" title="Excellent" data-value="4"> 
                    <i class="fa fa-ticket-alt fa-fw"></i> </div> 
            <div class="star star5 col-xl-2 col-sm-6" title="WOW!!!" data-value="5"> 
                    <i class="fa fa-ticket-alt fa-fw"></i> </div> 
`
                                break;
                            case 4:
                                tix = `<div class="star star1 col-xl-2 col-sm-6" title="Poor" data-value="1"> 
                <i class="fa fa-ticket-alt fa-fw"></i> 
            </div> 
            <div class="star star2 col-xl-2 col-sm-6" title="Fair" data-value="2"> 
                <i class="fa fa-ticket-alt fa-fw"></i> </div> 
            <div class="star star3 col-xl-2 col-sm-6" title="Good" data-value="3"> 
                    <i class="fa fa-ticket-alt fa-fw"></i> </div> 
            <div class="star star4 col-xl-2 col-sm-6" title="Excellent" data-value="4"> 
                    <i class="fa fa-ticket-alt fa-fw"></i> </div> `
                                break;
                            case 3:
                                tix = `<div class="star star1 col-xl-2 col-sm-6" title="Poor" data-value="1"> 
                <i class="fa fa-ticket-alt fa-fw"></i> 
            </div> 
            <div class="star star2 col-xl-2 col-sm-6" title="Fair" data-value="2"> 
                <i class="fa fa-ticket-alt fa-fw"></i> </div> 
            <div class="star star3 col-xl-2 col-sm-6" title="Good" data-value="3"> 
                    <i class="fa fa-ticket-alt fa-fw"></i> </div> `
                                break;
                            case 2:
                                tix = `<div class="star star1 col-xl-2 col-sm-6" title="Poor" data-value="1"> 
                <i class="fa fa-ticket-alt fa-fw"></i> 
            </div> 
            <div class="star star2 col-xl-2 col-sm-6" title="Fair" data-value="2"> 
                <i class="fa fa-ticket-alt fa-fw"></i> </div> `
                                break;
                            case 1:
                                tix = `<div class="star star1 col-xl-2 col-sm-6" title="Poor" data-value="1"> 
                <i class="fa fa-ticket-alt fa-fw"></i> 
            </div> `
                                break;
                            default:
                                break;
                        }


                        $('#movieList').append(`<br>
<div class="row"> 

<div class="col-3 movie-poster" style="border: 1px black solid"> 
    <div class="poster"><img src="${movieInfo.Poster}" alt=""></div> 
</div>
<div class="col-6 movie-info" style="border: 1px black solid"> 
    <h3 class="movieTitle">${movieInfo.Title}</h3> 
    <br> 
    <p class="actors">${movieInfo.Plot}</p> 
</div> 
<div class="col-3 movie-buttons container" style="border: 1px black solid;">
<!--    <button type="submit" class="btn btn-primary edit">-->
<!--     <i class="fas fa-edit"></i>-->
<!--    </button> -->
<!--    Trash button-->
<!--    <button type="submit" class="btn btn-primary delete">-->
<!--    onclick="location.reload();"-->
<!--    <i class="fas fa-trash"></i>-->
    </button> 
    <section class='rating-widget'>
    <br>
    <div class="rating-stars text-center">
                            <h4 style="color: dimgray; text-align: center">User Rating</h4>
        <div class="stars d-flex justify-content-center row"> 
<!--            <div class="star star1 col-xl-2 col-sm-6" title="Poor" data-value="1"> -->
<!--                <i class="fa fa-ticket-alt fa-fw"></i> -->
<!--            </div> -->
<!--            <div class="star star2 col-xl-2 col-sm-6" title="Fair" data-value="2"> -->
<!--                <i class="fa fa-ticket-alt fa-fw"></i> </div> -->
<!--            <div class="star star3 col-xl-2 col-sm-6" title="Good" data-value="3"> -->
<!--                    <i class="fa fa-ticket-alt fa-fw"></i> </div> -->
<!--            <div class="star star4 col-xl-2 col-sm-6" title="Excellent" data-value="4"> -->
<!--                    <i class="fa fa-ticket-alt fa-fw"></i> </div> -->
<!--            <div class="star star5 col-xl-2 col-sm-6" title="WOW!!!" data-value="5"> -->
<!--                    <i class="fa fa-ticket-alt fa-fw"></i> </div> -->
${tix}

</div></div></section>
<hr>
                            <h4 style="color: dimgray; text-align: center">IMDB Rating</h4>

<div class="ratingSection">${movieInfo.imdbRating}/10</div>
<hr>
                            <h4 style="color: dimgray; text-align: center">Rotten Tomatoes</h4>

<div class="ratingSection">${movieInfo.Ratings[1].Value}</div>

</div> </div>`);
                    })
            });


//                 // function stars() {
// //     console.log('h');
// //
// //     /* 1. Visualizing things on Hover - See next part for action on click */
// //     $('.stars div ').on('mouseover', function () {
// //         console.log('a');
// //         let onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
// //
// //         // Now highlight all the stars that's not after the current hovered star
// //         $(this).child('div.star').each(function (e) {
// //             if (e < onStar) {
// //                 $(this).addClass('hover');
// //             } else {
// //                 $(this).removeClass('hover');
// //             }
// //         });
// //
// //     }).on('mouseout', function () {
// //         $(this).parent().child('div.star').each(function (e) {
// //             $(this).removeClass('hover');
// //         });
// //     });
// //
// //
// //     /* 2. Action to perform on click */
// //     $('.stars div').on('click', function () {
// //         let onStar = parseInt($(this).data('value'), 10); // The star currently selected
// //         let stars = $(this).parent().child('div.star');
// //
// //         for (let i = 0; i < stars.length; i++) {
// //             $(stars[i]).removeClass('selected');
// //         }
// //
// //         for (let i = 0; i < onStar; i++) {
// //             $(stars[i]).addClass('selected');
// //         }
// //     });
// // }
// // export default stars
//                 $('.fa').on('mouseover', function () {
//                     console.log('star');
//                     var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
//
//                     // Now highlight all the stars that's not after the current hovered star
//                     $(this).parent().children('li.star').each(function (e) {
//                         if (e < onStar) {
//                             $(this).addClass('hover');
//                         } else {
//                             $(this).removeClass('hover');
//                         }
//                     });
//
//                 }).on('mouseout', function () {
//                     $(this).parent().children('li.star').each(function (e) {
//                         $(this).removeClass('hover');
//                     });
//                 });
//
//
//                 /* 2. Action to perform on click */
//                 $('.fa').on('click', function () {
//                     var onStar = parseInt($(this).data('value'), 10); // The star currently selected
//                     var stars = $(this).parent().children('li.star');
//
//                     for (let i = 0; i < stars.length; i++) {
//                         $(stars[i]).removeClass('selected');
//                     }
//
//                     for (let i = 0; i < onStar; i++) {
//                         $(stars[i]).addClass('selected');
//                     }
//                 });


        })
        .catch((error) => {
            alert('Oh no! Something went wrong.\nCheck the console for details.');
            console.log(error);
        })
    // .then(
    //     $('.edit').click(function () {
    //             edit();
    //             deletion();
    //         }
    //     )
    // );
    // .then(
    //         $('.edit').click(function () {
    //         console.log('worked');
    //         let clearMe = $(this).parent();
    //         clearMe.empty();
    //
    //         let movieId = id - 1;
    //         console.log(movieId);
    //         let movieOldTitle = title;
    //         let movieOldRating = rating;
    //
    //         clearMe.append(`<br><div>id#${id} -<form>
    //          <div class="row">
    //            <div class="col">
    //              <input type="text" class="form-control" id="editorRate${movieId}">
    //            </div>
    //            <div class="col">
    //              <input type="text" class="form-control" id="editorTitle${movieId}">
    //            </div>
    //          </div>
    //          <button type="submit" id="submitEdit" class="btn btn-primary">Submit Changes</button>
    //          </form>`);
    //         $(`#editorRate${movieId}`).attr({value: movieOldRating});
    //         $(`#editorTitle${movieId}`).attr({value: movieOldTitle});
    //
    //         $('#submitEdit').click(function (e) {
    //             e.preventDefault();
    //             // let title = $(`#editorRate${movieId}`).attr('value');
    //             // let rating = $(`#editorTitle${movieId}`).attr('value');
    //             console.log(`#editorTitle${movieId}`);
    //             let title = $(`#editorRate${movieId}`).val();
    //             let rating = $(`#editorTitle${movieId}`).val();
    //             let id = movieId;
    //             console.log(title);
    //
    //             let movieEdited = {title: title, rating: rating, id: id};
    //             console.log(movieEdited);
    //             console.log(id);
    //             let url = `/api/movies/${title}`;
    //             console.log(url);
    //             let options = {
    //                 method: 'PATCH',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify(movieEdited),
    //             };
    //             fetch(url, options)
    //                 .then()
    //                 .catch();
    //         });
    //     }).then(
    // $('.delete').click(function () {
    //     // let movieId = id -1;
    //     let movieId = id;
    //     console.log(movieId);
    //
    //     // let movieEdited = {title: title, rating: rating, id: ids};
    //     // console.log(movieEdited);
    //     let url = '/api/movies/' + (movieId);
    //     console.log(url);
    //     let options = {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //         // body: JSON.stringify(movieEdited),
    //     };
    //     fetch(url, options)
    //         .then(/* post was created successfully */)
    //         .catch(/* handle errors */);
    // })));

};


export default getMovies