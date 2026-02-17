// ===============================
// MAIN JS FILE
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Main JS Loaded ✅");

    // -------------------------------
    // Load Navbar and Footer
    // -------------------------------

    loadComponent("navbar-container", "navbar.html");
    loadComponent("footer-container", "footer.html");

});


// -------------------------------
// Dynamic Component Loader
// -------------------------------

function loadComponent(id, file) {

    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load " + file);
            }
            return response.text();
        })
        .then(data => {
            const container = document.getElementById(id);

            if (container) {
                container.innerHTML = data;
                console.log(file + " loaded successfully ✅");

                // Re-activate smooth scroll after loading components
                enableSmoothScroll();
            } else {
                console.error("Container not found:", id);
            }
        })
        .catch(error => {
            console.error("Error loading component:", error);
        });
}


// -------------------------------
// Smooth Scroll Function
// -------------------------------

function enableSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

}
