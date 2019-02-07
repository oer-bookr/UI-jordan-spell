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

let title = document.querySelector("h1");
TweenLite.from(title, 4, {opacity:0, left:"300px"});
title.get
// tl.add("skew") // adds a new label
//   .add(getSkewAnimation()) 


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