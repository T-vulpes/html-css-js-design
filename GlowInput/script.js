const inputContainer = document.getElementById('input-container');
const passwordInput = document.getElementById('password-input');
const highlighter = document.getElementById('highlighter');
const hoverTrigger = document.getElementById('hover-trigger');

hoverTrigger.addEventListener('mouseover', function() {
    passwordInput.setAttribute('type', 'text');
    passwordInput.classList.add('visible');
    highlighter.classList.add('expanded');
    inputContainer.classList.add('container-active');
});

hoverTrigger.addEventListener('mouseout', function() {
    passwordInput.setAttribute('type', 'password');
    passwordInput.classList.remove('visible');
    highlighter.classList.remove('expanded');
    inputContainer.classList.remove('container-active');
});
