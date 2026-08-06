document.querySelectorAll(".bib-toggle").forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault();

        const bib = this.closest("li").querySelector(".bibtex");
        bib.classList.toggle("open");

        this.textContent = bib.classList.contains("open")
            ? "hide bib"
            : "bib";
    });
});