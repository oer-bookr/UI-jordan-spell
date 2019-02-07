
let images = {
    bookcaseLadder: "./images/media/alexandre-godreau-445969-unsplash.jpg",
    multiStoryBookcase: "./images/media/caitlin-lin-434888-unsplash.jpg",
    windowAndBooks: "./images/media/john-mark-smith-266553-unsplash.jpg"
}


class HeaderImg {
    constructor(images){
        this.images = Object.values(images).map(image => {
            return image;
        });


        this.currentImgIndex = Math.floor(Math.random()* Math.floor(3));
        // this.currentImgIndex = 0;
        console.log(this.currentImgIndex);
        this.header = document.querySelector("header");
        
        this.header.style.backgroundImage = `url(${this.images[this.currentImgIndex]})`;
        
        document.addEventListener("load", () => this.rotateImg());
    }

    rotateImg(){
        
        if(this.currentImgIndex === 2){
            this.currentImgIndex = 0;
        } else {
            this.currentImgIndex++;
        }

        this.header.style.backgroundImage = `url(${this.images[this.currentImgIndex]})`;
    }
}

let headerImg = new HeaderImg(images);





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

