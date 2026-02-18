// ===============================
// SCROLL ANIMATION ONLY
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("hidden");
            }
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(el => {
        el.classList.add("hidden");   // hide only after DOM loads
        observer.observe(el);
    });

});
