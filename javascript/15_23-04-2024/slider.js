let index = 1;
slideshow(index);

function slideshow(n) {
    let i;
    let slides = document.getElementsByClassName("slider");
    if (n > slides.length) {
        index = 1;
    }
    if (n < 1) {
        index = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[index - 1].style.display = "block"
}

// onclick
function btncall(n) {
    slideshow(index += n)
}