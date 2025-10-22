// Sayfanın tüm içeriği (resimler dahil) yüklendiğinde bu fonksiyonu çalıştır
window.addEventListener('load', function() {
    
    // Gerekli elementleri seç
    const loaderContainer = document.getElementById('loader-container');
    const body = document.body;

    // Loader'ı gizlemek için 'hidden' sınıfını ekle
    loaderContainer.classList.add('hidden');
    
    // Loader gizlendikten sonra sayfanın tekrar kaydırılabilmesini sağla
    body.style.overflow = 'auto'; 
});