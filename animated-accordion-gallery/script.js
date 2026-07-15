// Tüm panelleri seç
const panels = document.querySelectorAll('.panel');

// Her bir panele tıklama özelliği ekle
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        
        // Önce tüm panellerden 'active' sınıfını temizle (Küçülsünler)
        removeActiveClasses();
        
        // Sadece tıklanan panele 'active' sınıfını ekle (Büyüsün)
        panel.classList.add('active');
    });
});

// Temizleyici fonksiyon
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}