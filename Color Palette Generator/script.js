function generatePalette() {
    const palette = document.getElementById('palette');
    palette.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;

        const colorCode = document.createElement('div');
        colorCode.className = 'color-code';
        colorCode.textContent = color;

        colorBox.appendChild(colorCode);
        palette.appendChild(colorBox);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
