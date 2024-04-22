function showMenu() {
    let navlist = document.querySelector(".nav");
    navlist.classList.toggle("nav-show")
}

let topheader = document.querySelector("header")
window.addEventListener("scroll", () => {
    let currentval = window.scrollY;
    if (currentval > 0) {
        topheader.classList.add("headerFixed")
    } else {
        topheader.classList.remove("headerFixed")
    }
})