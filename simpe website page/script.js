// script.js
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".about .about-picture img, .container .content img");
    
    images.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.classList.add("hover");
        });
        img.addEventListener("mouseout", () => {
            img.classList.remove("hover");
        });
    });
    
    // Animation example
    const aboutInfo = document.querySelector(".about-info h1");
    aboutInfo.classList.add("animate");

    setTimeout(() => {
        aboutInfo.classList.remove("animate");
    }, 2000);
});
