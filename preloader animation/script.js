            document.addEventListener("DOMContentLoaded", function() {
            const loaderWrapper = document.querySelector('.loader-wrapper');
            const percentageCounter = document.querySelector('.percentage-counter');
            const loaderLogo = document.querySelector('.loader-logo'); 
            const body = document.querySelector('body');
            const pageContent = document.querySelector('.page-content');
            
            const ANIMATION_DURATION = 4000; 
            const counterInterval = ANIMATION_DURATION / 100;
            
            let currentPercentage = 0;

            const interval = setInterval(() => {
                if (currentPercentage < 100) {
                    currentPercentage++;
                    
                    // 1. Sayacı güncelle
                    percentageCounter.textContent = currentPercentage + '%';

                    // 2. KİLİT NOKTA 3: CSS'teki değişkeni JavaScript ile anlık olarak güncelle
                    // Bu satır, JavaScript ve CSS arasındaki sihirli bağlantıdır.
                    loaderLogo.style.setProperty('--fill-percentage', currentPercentage + '%');
                
                } else {
                    clearInterval(interval);
                }
            }, counterInterval);

            // Animasyonun tamamen bitmesini bekle ve sonra loader'ı gizle
            setTimeout(() => {
                loaderWrapper.classList.add('loader-hidden');
                body.style.overflow = 'auto';
                pageContent.classList.add('visible');
            }, ANIMATION_DURATION + 500); // Animasyon bittikten 0.5 saniye sonra
        });


        /* ===== JAVASCRIPT KODLARI BİTİŞİ ===== */
