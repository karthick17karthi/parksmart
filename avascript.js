document.addEventListener("DOMContentLoaded", function () {
    console.log("Park Smart script loaded!");

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Hero button click event
    const heroBtn = document.querySelector(".hero a");
    if (heroBtn) {
        heroBtn.addEventListener("click", function (event) {
            console.log("Redirecting to Booking Page");
        });
    }

    // Feature card hover effect
    const featureCards = document.querySelectorAll(".feature-card");
    featureCards.forEach(card => {
        card.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
        });
        card.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Get Started button alert
    const getStartedBtn = document.querySelector(".get-started a");
    if (getStartedBtn) {
        getStartedBtn.addEventListener("click", function (event) {
            alert("Redirecting to Login Page...");
        });
    }
});
