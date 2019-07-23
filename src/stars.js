<<<<<<< HEAD
// function stars() {
//     console.log('h');
//
//     /* 1. Visualizing things on Hover - See next part for action on click */
//     $('.stars div ').on('mouseover', function () {
//         console.log('a');
//         let onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
//
//         // Now highlight all the stars that's not after the current hovered star
//         $(this).child('div.star').each(function (e) {
//             if (e < onStar) {
//                 $(this).addClass('hover');
//             } else {
//                 $(this).removeClass('hover');
//             }
//         });
//
//     }).on('mouseout', function () {
//         $(this).parent().child('div.star').each(function (e) {
//             $(this).removeClass('hover');
//         });
//     });
//
//
//     /* 2. Action to perform on click */
//     $('.stars div').on('click', function () {
//         let onStar = parseInt($(this).data('value'), 10); // The star currently selected
//         let stars = $(this).parent().child('div.star');
//
//         for (let i = 0; i < stars.length; i++) {
//             $(stars[i]).removeClass('selected');
//         }
//
//         for (let i = 0; i < onStar; i++) {
//             $(stars[i]).addClass('selected');
//         }
//     });
// }
// export default stars
=======
$('#stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function(e){
        if (e < onStar) {
            $(this).addClass('hover');
        }
        else {
            $(this).removeClass('hover');
        }
    });

}).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
        $(this).removeClass('hover');
    });
});


/* 2. Action to perform on click */
$('#stars li').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');

    for (i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass('selected');
    }

    for (i = 0; i < onStar; i++) {
        $(stars[i]).addClass('selected');
    }
>>>>>>> parent of b7c2b2f... pulled info from OMDB, need to ,make it pretty
