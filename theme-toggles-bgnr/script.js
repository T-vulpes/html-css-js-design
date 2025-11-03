document.addEventListener("DOMContentLoaded", () => {    
    const body = document.body;
    const toggles = [
        {
            id: 'theme-toggle', // Dark Mode
            element: document.getElementById('theme-toggle'),
            label: document.querySelector('label[for="theme-toggle"]'),
            textElement: document.querySelector('label[for="theme-toggle"] .toggle-text'),
            bodyClass: 'dark-mode'
        },
        {
            id: 'icon-toggle', // High Contrast
            element: document.getElementById('icon-toggle'),
            label: document.querySelector('label[for="icon-toggle"]'),
            textElement: document.querySelector('label[for="icon-toggle"] .toggle-text'),
            bodyClass: 'high-contrast'
        },
        {
            id: 'success-toggle', // Success Mode
            element: document.getElementById('success-toggle'),
            label: document.querySelector('label[for="success-toggle"]'),
            textElement: document.querySelector('label[for="success-toggle"] .toggle-text'),
            bodyClass: 'success-mode'
        },
        {
            id: 'warning-toggle', // Warning Mode
            element: document.getElementById('warning-toggle'),
            label: document.querySelector('label[for="warning-toggle"]'),
            textElement: document.querySelector('label[for="warning-toggle"] .toggle-text'),
            bodyClass: 'warning-mode'
        }
    ];

    // 2. Metinleri güncelleyen yardımcı fonksiyon
    function updateToggleText(toggle, isActive) {
        // Sadece 'Dark Mode' anahtarının metnini değiştiriyoruz
        if (toggle.id === 'theme-toggle' && toggle.textElement) {
            toggle.textElement.textContent = isActive ? "Light Mode" : "Dark Mode";
        }
        // Diğer metinler statiktir
    }

    // 3. Ana Mod Değiştirme Fonksiyonu
    function handleModeChange(clickedToggleId) {
        
        toggles.forEach(toggle => {
            // Label'ın null olup olmadığını kontrol et
            if (!toggle.label) return;

            if (toggle.id === clickedToggleId) {
                // Bu, tıklanan anahtar.
                if (!toggle.element.checked) {
                    // "Kapatmak" için tıklandıysa
                    body.classList.remove(toggle.bodyClass);
                    toggle.label.classList.remove('is-active');
                    updateToggleText(toggle, false);
                } else {
                    // "Açmak" için tıklandıysa
                    body.classList.add(toggle.bodyClass);
                    toggle.label.classList.add('is-active');
                    updateToggleText(toggle, true);
                }
            } else {
                // Bu, tıklanmayan diğer anahtar.
                // Zorla kapat.
                toggle.element.checked = false;
                body.classList.remove(toggle.bodyClass);
                toggle.label.classList.remove('is-active');
                updateToggleText(toggle, false);
            }
        });
    }

    // 4. Tüm anahtarlara 'change' olay dinleyicisi ekle
    toggles.forEach(toggle => {
        if (toggle.element) {
            toggle.element.addEventListener('change', () => {
                handleModeChange(toggle.id);
            });
        }
    });

    // 5. Sayfa Yüklendiğinde Başlangıç Durumunu Ayarla
    let activeToggleFound = false;
    toggles.forEach(toggle => {
        if (toggle.element && toggle.element.checked && !activeToggleFound) {
            activeToggleFound = true;
            handleModeChange(toggle.id);
        } else if (toggle.element) {
            toggle.element.checked = false;
        }
    });

    if (!activeToggleFound) {
        handleModeChange(null);
    }

});
