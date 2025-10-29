// --- Elementleri Seç ---
const passwordInput = document.getElementById('password-input');
const toggleEye = document.getElementById('toggle-eye');
const pupil = document.getElementById('pupil');

// --- 1. Göz Kırpma (Blink) Mekanizması (Tıklama) ---
toggleEye.addEventListener('click', () => {
    toggleEye.classList.toggle('closed');
    const isClosed = toggleEye.classList.contains('closed');
    
    if (isClosed) {
        // Gizle
        passwordInput.setAttribute('type', 'password');
        passwordInput.classList.remove('visible');
        
        // GÖZ KAPANIRKEN: Göz bebeğini aniden merkeze al
        pupil.style.transform = 'translate(-50%, -50%)';
    } else {
        // Göster
        passwordInput.setAttribute('type', 'text');
        passwordInput.classList.add('visible');
    }
});

// --- 2. Göz Bebeği Takip (Mouse Move) Mekanizması ---

function movePupil(event) {
    
    // 2. DÜZELTME: Göz kapalıysa, göz bebeğini HAREKET ETTİRME.
    if (toggleEye.classList.contains('closed')) {
        return; // Fonksiyondan hemen çık
    }
    
    const eyeRect = toggleEye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
    
    const maxPupilMoveX = (eyeRect.width / 2) - (pupil.offsetWidth / 2) - 2; 
    const maxPupilMoveY = (eyeRect.height / 2) - (pupil.offsetHeight / 2) - 2;

    let pupilX = Math.cos(angle) * maxPupilMoveX;
    let pupilY = Math.sin(angle) * maxPupilMoveY;
    
    pupil.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
}

window.addEventListener('mousemove', movePupil);