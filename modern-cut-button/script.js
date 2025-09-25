document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('background-video');
    if (video) {
        video.playbackRate = 1.2;
    }

    const purchaseButton = document.getElementById('purchaseButton');
    const cutLine = purchaseButton.querySelector('.cut-line');

    purchaseButton.addEventListener('click', function() {
        if (!purchaseButton.classList.contains('clicked')) {
            purchaseButton.classList.add('clicked');
            
            // Animasyon bittikten sonra butonu resetlemek için (isteğe bağlı)
            setTimeout(() => {
                purchaseButton.classList.remove('clicked');
            }, 2500); 
        }
    });
});