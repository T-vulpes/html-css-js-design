document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'slide',
        speed: 1000,  // Slayt geçiş hızı (yavaşlatılmış)
        on: {
            init: function () {
                // İlk slayt sayfa yüklendiğinde animasyonla gelecek
                const activeSlide = this.slides[this.activeIndex];
                setTimeout(() => {
                    animateSlide(activeSlide);
                }, 100);  // Gecikme biraz artırıldı
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

    // Slaytları sıfırlayan fonksiyon (animasyonları hazırlamak için)
    function resetSlides(slides) {
        slides.forEach(slide => {
            slide.style.opacity = 0;
            slide.style.transform = 'translateX(100px)';
            slide.style.transition = 'none';  // Anında görünmez yapıyoruz, geçiş yok
        });
    }

    // Aktif slaytı animasyonla gösteren fonksiyon
    function animateSlide(slide) {
        slide.style.opacity = 1;
        slide.style.transform = 'translateX(0)';
        slide.style.transition = 'opacity 1.5s ease, transform 1.5s ease';  // Geçiş daha yavaş
    }

    // Sayfa yüklendiğinde ilk aktif slaytı anında görünür yap
    window.onload = function() {
        const firstSlide = document.querySelector('.swiper-slide-active');
        firstSlide.style.opacity = 1;
        firstSlide.style.transform = 'translateX(0)';
        firstSlide.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    };
});
