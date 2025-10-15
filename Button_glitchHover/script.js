document.addEventListener("DOMContentLoaded", function() {
    const cyberButton = document.querySelector('.cyber-button');
    cyberButton.addEventListener('click', (e) => {
        e.preventDefault();

        // Eğer animasyon zaten çalışıyorsa, tekrar tetiklenmesini engelle
        if (cyberButton.classList.contains('is-clicked')) {
            return;
        }

        // Animasyonu başlatmak için .is-clicked sınıfını ekle
        cyberButton.classList.add('is-clicked');
    });

    // Butona bir 'transitionend' dinleyicisi ekle
    // Bu, CSS transition animasyonu bittiğinde otomatik olarak çalışır
    cyberButton.addEventListener('transitionend', () => {
        // Animasyon bittiğinde, .is-clicked sınıfını kaldır
        cyberButton.classList.remove('is-clicked');
    });


});
