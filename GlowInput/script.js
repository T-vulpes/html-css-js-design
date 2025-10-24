const inputContainer = document.getElementById('input-container');
const passwordInput = document.getElementById('password-input');
const highlighter = document.getElementById('highlighter');
const hoverTrigger = document.getElementById('hover-trigger');

// Fare görünmez alanın üzerine geldiğinde
hoverTrigger.addEventListener('mouseover', function() {
    passwordInput.setAttribute('type', 'text');
    passwordInput.classList.add('visible');
    highlighter.classList.add('expanded');
    inputContainer.classList.add('container-active');
});

// Fare görünmez alandan ayrıldığında
hoverTrigger.addEventListener('mouseout', function() {
    passwordInput.setAttribute('type', 'password');
    passwordInput.classList.remove('visible');
    highlighter.classList.remove('expanded');
    inputContainer.classList.remove('container-active');
});
