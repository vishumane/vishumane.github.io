document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       SKILLS TAB FILTER
    ========================= */
    const skillSection = document.querySelector(".skills");
    const skillTabs = skillSection.querySelectorAll(".tab:not(.book-tab)");
    const skillCards = skillSection.querySelectorAll(".skill-card:not(.book)");

    skillTabs.forEach(tab => {
        tab.addEventListener("click", () => {

            skillTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const filter = tab.dataset.filter;

            skillCards.forEach(card => {
                if (filter === "all" || card.classList.contains(filter)) {
                    card.classList.remove("hide");
                } else {
                    card.classList.add("hide");
                }
            });
        });
    });

    /* =========================
       BOOK TAB FILTER
    ========================= */
    const booksSection = document.querySelector("#books");
    const bookTabs = booksSection.querySelectorAll(".book-tab");
    const bookCards = booksSection.querySelectorAll(".book");

    bookTabs.forEach(tab => {
        tab.addEventListener("click", () => {

            bookTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const filter = tab.dataset.filter;

            bookCards.forEach(card => {
                if (filter === "all" || card.classList.contains(filter)) {
                    card.classList.remove("hide");
                } else {
                    card.classList.add("hide");
                }
            });
        });
    });

    /* =========================
       VIEW MORE → SHOW BOOKS
    ========================= */
    const viewMoreBtn = document.querySelector(".view-more");

    viewMoreBtn.addEventListener("click", () => {
        booksSection.classList.toggle("hidden");

        viewMoreBtn.textContent =
            booksSection.classList.contains("hidden")
                ? "View More"
                : "Hide Books";
    });

    /* =========================
       CARD HOVER GLOW EFFECT
    ========================= */
    document.querySelectorAll(".skill-card").forEach(card => {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--x", `${e.clientX - rect.left}px`);
            card.style.setProperty("--y", `${e.clientY - rect.top}px`);
        });
    });

    /* =========================
       COPYRIGHT YEAR
    ========================= */
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

});