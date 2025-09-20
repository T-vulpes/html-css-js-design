document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('background-video');
    if (video) {
        video.playbackRate = 5; 
    }
});

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggle-icon');

    // Eğer şifre alanı 'password' tipindeyse
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Tipi 'text' yaparak şifreyi göster
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash'); // Gözü kapalı ikonuna dönüştür
    } else {
        passwordInput.type = 'password'; // Tipi 'password' yaparak şifreyi gizle
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye'); // Gözü açık ikonuna dönüştür
    }

}
