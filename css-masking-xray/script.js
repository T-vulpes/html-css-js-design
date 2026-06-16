const maskLayer = document.querySelector('.mask-layer');
document.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    maskLayer.style.setProperty('--x', `${x}px`);
    maskLayer.style.setProperty('--y', `${y}px`);
});