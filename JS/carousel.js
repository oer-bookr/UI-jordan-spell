class Carousel {
    constructor(carousel){
        this.carousel = carousel;

        this.reviews = this.carousel.querySelectorAll(".review");
        this.currentIndex = 0;

        this.reviews[this.currentIndex].classList.add("selected-review");
        this.reviews[this.currentIndex].style.display = "block";

        this.leftButton = this.carousel.querySelector(".left-button");
        this.rightButton = this.carousel.querySelector(".right-button");

        this.leftButton.addEventListener("click", () => this.selectLeft());
        this.rightButton.addEventListener("click", () => this.selectRight());

    }

    selectLeft(){
        if(this.currentIndex > 0){
            this.reviews[this.currentIndex].style.display = "none";
            this.currentIndex--;
            this.reviews.forEach(review => review.classList.remove("selected-review"));
            this.reviews[this.currentIndex].classList.add("selected-review");
            this.reviews[this.currentIndex].style.display = "block";
        } else {
            this.reviews[this.currentIndex].style.display = "none";
            this.currentIndex = 3;
            this.reviews.forEach(review => review.classList.remove("selected-review"));
            this.reviews[this.currentIndex].classList.add("selected-review");
            this.reviews[this.currentIndex].style.display = "block";
        }
    }

    selectRight(){
        if(this.currentIndex < 3){
            this.reviews[this.currentIndex].style.display = "none";
            this.currentIndex++;
            this.reviews.forEach(review => review.classList.remove("selected-review"));
            this.reviews[this.currentIndex].classList.add("selected-review");
            this.reviews[this.currentIndex].style.display = "block";
        } else {
            this.reviews[this.currentIndex].style.display = "none";
            this.currentIndex = 0;
            this.reviews.forEach(review => review.classList.remove("selected-review"));
            this.reviews[this.currentIndex].classList.add("selected-review");
            this.reviews[this.currentIndex].style.display = "block";
        }
    }
}

let topBooksCarousel = document.querySelector(".top-oer-books .carousel");
topBooksCarousel = new Carousel(topBooksCarousel);

let newBooksCarousel = document.querySelector(".new-oer-books .carousel");
console.log(newBooksCarousel);
newBooksCarousel = new Carousel(newBooksCarousel);