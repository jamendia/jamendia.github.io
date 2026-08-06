document.addEventListener("DOMContentLoaded", () => {

    let openBib = null;
    let openLink = null;

    document.querySelectorAll(".bib-toggle").forEach(link => {

        link.addEventListener("click", function(e) {

            e.preventDefault();

            // Clicking the same Bib closes it
            if (openLink === this) {
                openBib.remove();
                openBib = null;
                openLink = null;
                return;
            }

            // Close previous Bib
            if (openBib)
                openBib.remove();

            const source = document.getElementById(this.dataset.bib);

            const pre = document.createElement("pre");
            pre.className = "bib-entry";
            pre.textContent = source.textContent.trim();

            this.insertAdjacentElement("afterend", pre);

            openBib = pre;
            openLink = this;

        });

    });

});