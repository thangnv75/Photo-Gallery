function setImages() {
    let listImg = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat5.jpg", "cat6.jpg"];

    let currentImg = document.querySelectorAll(".flex img");

    let usedIndexes = new Set();
    
    for (let i = 0; i < currentImg.length; i++) {
        let tmp;
        do {
            tmp = Math.floor(Math.random() * listImg.length);
        } while (usedIndexes.has(tmp));

        usedIndexes.add(tmp);
        let randomImg = "images/" + listImg[tmp];

        currentImg[i].src = randomImg;
        currentImg[i].setAttribute("tabindex", 0);

        // Add click event listener to change main image
        currentImg[i].addEventListener("click", function () {
            document.querySelector(".show img").src = this.src;
        });
    }
}
