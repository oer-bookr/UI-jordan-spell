// $( document ).click(function() {
//     $( ".social" ).effect("bounce", "slow");
//   });




$(".category").hover(function() {
    doBounce($(this), 1, '10px', 300);
});

// $(document).ready(function() {

//     $("#search-bar").click(function(){
//        $(".category").hover( "bounce", {times:3}, 300 );
//     });

//  });


function doBounce(element, times, distance, speed) {
    for(i = 0; i < times; i++) {
        element.animate({marginTop: '-='+distance},speed)
            .animate({marginTop: '+='+distance},speed);
    }        
}


// let reviews = document.querySelectorAll(".main-content .book-categories .category");
// reviews.forEach(e => {
//     e.addEventListener("mouseover", $(".category").hover( "bounce", {times:3}, 300 ));
// })


// //customizing the sign up button
// let signUpButton = document.getElementById("button");

// signUpButton.addEventListener("click", e => {
//     alert("lets sign up");
// })

// //custimizing the search button
// let searchButton = document.getElementById("search-bar");

// searchButton.addEventListener("click", e => {
//     alert("search something");
// })