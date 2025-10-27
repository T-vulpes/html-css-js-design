const realInput = document.getElementById('real-input');
const displayArea = document.getElementById('display-area');
const toggle = document.getElementById('visibility-toggle'); 

displayArea.addEventListener('click', () => {
    realInput.focus();
});

realInput.addEventListener('input', (e) => {
    const existingChars = displayArea.querySelectorAll('.char');
    existingChars.forEach(char => char.remove());
    
    const value = e.target.value;
    const isVisible = toggle.classList.contains('toggled'); 
    for (let i = 0; i < value.length; i++) {
        const char = value[i];

        const charElement = document.createElement('div');
        charElement.classList.add('char');
        charElement.style.transitionDelay = `${i * 40}ms`;
        if (isVisible) {
            charElement.classList.add('visible');
        }

        const frontFace = document.createElement('div');
        frontFace.classList.add('char-face', 'char-front');
        frontFace.textContent = '*';

        const backFace = document.createElement('div');
        backFace.classList.add('char-face', 'char-back');
        backFace.textContent = char;

        charElement.appendChild(frontFace);
        charElement.appendChild(backFace);
        displayArea.insertBefore(charElement, realInput);
    }
    
    realInput.focus();
});

// YENİ: Butona tıklandığında ('change' yerine 'click')
toggle.addEventListener('click', () => {
    // Butonun 'toggled' sınıfını değiştir
    toggle.classList.toggle('toggled');

    // Yeni durumu kontrol et
    const isVisible = toggle.classList.contains('toggled');
    const allChars = displayArea.querySelectorAll('.char');

    // Mevcut tüm harfleri çevir
    allChars.forEach(char => {
        if (isVisible) {
            char.classList.add('visible');
        } else {
            char.classList.remove('visible');
        }
    });

});
