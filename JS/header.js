
images = {
    bookcaseLadder: "../images/media/alexandre-godreau-445969-unsplash.jpg",
    multiStoryBookcase: "../images/media/caitlin-lin-434888-unsplash.jpg",
    windowAndBooks: "../images/media/john-mark-smith-266553-unsplash.jpg"
}


class headerImg {
    constructor(images){
        this.images = images;

        this.currentImgIndex = 0;

    }

    rotateImg(){
        window.addEventListener("load", () => {
            document.header.style.backgroundImage = "url()";
        });
    }
}





//adds a shake effect to the social media icons with jquery
$(document).ready(function(){
    $(".social").mouseover(function(){
        // $(this).hide();
        $(this).effect("shake", {distance: 10}, {times:3}, 1000);
    });
});


//adds a bounce effect to the various book categories with jquery
$(document).ready(function(){
    $(".category").mouseover(function(){
        $(this).effect("bounce", {times:1}, {distance:"10px"}, 500);
    });
});

let title = document.querySelector("h1");
TweenLite.from(title, 4, {opacity:0, left:"300px"});



// //customizing the sign up button
// let signUpButton = document.getElementById("button");

// signUpButton.addEventListener("click", e => {
//     alert("lets sign up");
// })

//custimizing the search button
let searchButton = document.getElementById("search-bar");

searchButton.addEventListener("click", e => {
    alert("search something");
})