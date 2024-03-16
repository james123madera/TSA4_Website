// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

    // Initialize Bootstrap components
    document.addEventListener("DOMContentLoaded", function() {
        new bootstrap.Collapse(document.querySelector(".navbar-collapse"));
    });


// Example of additional JavaScript functionality:
// You can add more JavaScript code here as needed for your website
// For instance, form validation, animations, fetching data from a server, etc.
