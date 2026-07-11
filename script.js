// FAQ

const faq = document.querySelectorAll(".faq-item");

faq.forEach(item=>{

item.querySelector(".faq-question").addEventListener("click",()=>{

item.classList.toggle("active");

});

});

// Mobile Menu

// Mobile Menu Fix
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

if (menu && nav) {
    // Toggles menu when clicking the hamburger icon
    menu.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Automatically closes the menu drawer when any link inside is clicked!
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
}

const form = document.getElementById("registrationForm");

if (form) {

    form.addEventListener("submit", async function(e) {

        e.preventDefault();

        const formData = new FormData(form);

        try {

            const response = await fetch("https://script.google.com/macros/s/AKfycbxg31SALHy5UBKrvgI52__Q0M6ZY6ou5tu8KLv4G20SCQeUgNoTz_bIiLUmeCkyUQzK8Q/exec", {

                method: "POST",

                body: formData

            });

            console.log(await response.text());

            window.location.href = "pages/thank-you.html";

        } catch (error) {

            console.error(error);
            alert("Submission failed.");

        }

    });

}