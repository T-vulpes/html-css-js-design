document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'slide',
        speed: 1000,  
        on: {
            init: function () {
                const activeSlide = this.slides[this.activeIndex];
                setTimeout(() => {
                    animateSlide(activeSlide);
                }, 100);
            },
            slideChangeTransitionStart: function () {
                resetSlides(this.slides);
            },
            slideChangeTransitionEnd: function () {
                const activeSlide = this.slides[this.activeIndex];
                animateSlide(activeSlide);
            }
        }
    });

    function resetSlides(slides) {
        slides.forEach(slide => {
            slide.style.opacity = 0;
            slide.style.transform = 'translateX(100px)';
            slide.style.transition = 'none';  
        });
    }

    function animateSlide(slide) {
        slide.style.opacity = 1;
        slide.style.transform = 'translateX(0)';
        slide.style.transition = 'opacity 1.5s ease, transform 1.5s ease';  
    }
    window.onload = function() {
        const firstSlide = document.querySelector('.swiper-slide-active');
        firstSlide.style.opacity = 1;
        firstSlide.style.transform = 'translateX(0)';
        firstSlide.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    };
});
