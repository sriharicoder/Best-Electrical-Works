// ===============================
// MAIN JS FILE
// ===============================

document.addEventListener("DOMContentLoaded", function () {
    loadComponent("navbar-container", "navbar.html");
    loadComponent("footer-container", "footer.html");
    loadComponent("sidebar-container", "sidebar.html");

    enableSmoothScroll();
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

                // Re-enable smooth scroll after loading
                enableSmoothScroll();
            }
        })
        .catch(error => {
            console.error("Error loading component:", error);
        });
}


// -------------------------------
// Smooth Scroll with Navbar Offset
// -------------------------------

function enableSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.removeEventListener("click", handleScroll);
        anchor.addEventListener("click", handleScroll);

    });
}

function handleScroll(e) {

    const targetId = this.getAttribute("href");

    if (targetId.length > 1) {

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            e.preventDefault();

            const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0;

            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
                top: elementPosition - navbarHeight - 20,
                behavior: "smooth"
            });
        }
    }
}


// -------------------------------
// Sidebar Toggle (Optional)
// -------------------------------

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
        sidebar.classList.toggle("active");
    }
}
