const text = document.getElementById("text");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
const ele = text.querySelectorAll('span');
for (let i = 0; i < ele.length; i++) {
    ele[i].style.transform = "rotate(" + i * 19 + "deg)";
}

anime({
    targets: 'header',
    translateY: [-30, 0],
    opacity: [0, 1],
    easing: 'linear'
});

anime({
    targets: '.social-link',
    translateY: [30, 0],
    opacity: [0, 1],
    easing: 'linear'
});

anime({
    targets: '.imgbx',
    width: [0, 520],
    opacity: [0, 1],
    easing: 'linear'
});

anime({
    targets: '.title',
    translateX: [75, 0],
    opacity: [0, 1],
    easing: 'linear'
});

const images = ["img/img1.jpg", "img/img2.jpg"];
let currentIndex = 0;

function changeImage() {
    const imgElement = document.getElementById("slideshow-image");
    imgElement.style.opacity = 0; // Yumuşak geçiş için opaklığı sıfırla

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
        imgElement.style.opacity = 1; // Opaklığı geri getir
    }, 500);
}

setInterval(changeImage, 4000);
