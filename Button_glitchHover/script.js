document.addEventListener("DOMContentLoaded", function() {
    const cyberButton = document.querySelector('.cyber-button');
    cyberButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (cyberButton.classList.contains('is-clicked')) {
            return;
        }
        cyberButton.classList.add('is-clicked');
    });
    cyberButton.addEventListener('transitionend', () => {
        cyberButton.classList.remove('is-clicked');
    });
});
