// FAQ

const faq = document.querySelectorAll(".faq-item");

faq.forEach(item=>{

item.querySelector(".faq-question").addEventListener("click",()=>{

item.classList.toggle("active");

});

});

// Mobile Menu

const menu = document.querySelector(".menu-toggle");

const nav = document.querySelector("nav");

if (menu) {
    menu.addEventListener("click", () => {
        nav.classList.toggle("active");
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