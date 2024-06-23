// 9. Loading Button
document.querySelector('.btn-loading').addEventListener('click', function() {
    this.innerHTML = 'Loading...';
    this.disabled = true;
    setTimeout(() => {
        this.innerHTML = 'Loading Button';
        this.disabled = false;
    }, 3000);
});

// 10. Ripple Effect Button
document.querySelectorAll('.btn-ripple').forEach(button => {
    button.addEventListener('click', function (e) {
        let rect = this.getBoundingClientRect();
        let ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        this.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
