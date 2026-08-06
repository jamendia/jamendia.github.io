const backToTop = document.getElementById("back-to-top");

function toggleBackToTop() {
    if (window.scrollY > 250) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
}

window.addEventListener("scroll", toggleBackToTop);

backToTop.addEventListener("click", function (e) {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Initialize on page load
toggleBackToTop();