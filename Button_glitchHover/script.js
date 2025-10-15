document.addEventListener("DOMContentLoaded", function() {
    const cyberButton = document.querySelector('.cyber-button');
    cyberButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (cyberButton.classList.contains('is-clicked')) {
            return;
        }
        cyberButton.classList.add('is-clicked');
    });

    // Butona bir 'transitionend' dinleyicisi ekle
    // Bu, CSS transition animasyonu bittiğinde otomatik olarak çalışır
    cyberButton.addEventListener('transitionend', () => {
        // Animasyon bittiğinde, .is-clicked sınıfını kaldır
        cyberButton.classList.remove('is-clicked');
    });


});

