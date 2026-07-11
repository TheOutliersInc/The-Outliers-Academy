// ===============================
// FAQ Accordion
// ===============================

document.querySelectorAll(".faq-item").forEach(item => {
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

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
}

// ===============================
// Prevent Double Submission (FormSubmit Compatible)
// ===============================
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", () => {
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
            // Use setTimeout to wait 50 milliseconds!
            // This gives the browser time to launch the form submission data out 
            // to FormSubmit before we disable the button element.
            setTimeout(() => {
                submitButton.disabled = true;
                submitButton.textContent = "Registering...";
            }, 50);
        }
    });
}

// ===============================
// Smooth Scroll for ALL Anchor Links
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});