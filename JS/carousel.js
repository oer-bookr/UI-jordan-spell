class Carousel {
    constructor(carousel){
        this.carousel = carousel;

        this.reviews = document.querySelectorAll(".top-oer-books review");
        this.currentIndex = 0;
        this.reviews[this.currentIndex].classList.add("selected-reviews");
        this.reviews[this.currentIndex].style.display = "block";

        this.leftButton = document.querySelector(".carousel .left-button");
        this.rightButton = document.querySelector(".carousel .right-button");

        leftButton.addEventListener("click", () => this.selectLeft());
        rightButton.addEventListener("click", () => this.selectRight());

    }

    selectLeft(){
        if(this.currentIndex > 0){
            this.reviews[this.currentIndex].style.display = "none";
            this.currentIndex--;
            this.reviews.forEach(review => review.classList.remove("selected-reviews"));
            this.reviews[this.currentIndex].classList.add("selected-reviews");
            this.reviews[this.currentIndex].style.display = "block";
        } else {
            this.reviews[this.currentIndex].style.display = "none";
            this.currentIndex = 3;
            this.reviews.forEach(review => review.classList.remove("selected-reviews"));
            this.reviews[this.currentIndex].classList.add("selected-reviews");
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
            this.imgs[this.currentIndex].style.display = "none";
            this.currentIndex = 0;
            this.imgs.forEach(review => review.classList.remove("selected-img"));
            this.imgs[this.currentIndex].classList.add("selected-img");
            this.imgs[this.currentIndex].style.display = "block";
        }
    }
}

let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);