// ===============================
// FAQ Accordion
// ===============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});


// ===============================
// Mobile Navigation
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });

}


// ===============================
// Prevent Double Form Submission
// ===============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", () => {

        const submitButton = form.querySelector('button[type="submit"]');

        submitButton.disabled = true;
        submitButton.textContent = "Registering...";

    });

}