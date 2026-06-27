// Global Route Database
const locations = {
    "1": {
        title: "Colosseum, Italy",
        desc: "The most magnificent and historic gladiator arena of the Roman Empire. An architectural masterpiece defying centuries.",
        distance: "1,450"
    },
    "2": {
        title: "Statue of Liberty, USA",
        desc: "A colossal monument rising in the New York harbor, a universal symbol of freedom and hope.",
        distance: "8,200"
    },
    "3": {
        title: "Mount Fuji, Japan",
        desc: "Japan's sacred, volcanic, and uniquely scenic massive mountain. A breathtaking route for nature lovers.",
        distance: "9,300"
    }
};

const markers = document.querySelectorAll('.marker');
const infoCard = document.getElementById('info-card');
const closeCardBtn = document.getElementById('close-card');

const locTitle = document.getElementById('loc-title');
const locDesc = document.getElementById('loc-desc');
const locDistance = document.getElementById('loc-distance');

markers.forEach(marker => {
    marker.addEventListener('click', (e) => {
        // 1. Get location data
        const id = marker.getAttribute('data-id');
        const data = locations[id];

        locTitle.innerText = data.title;
        locDesc.innerText = data.desc;
        locDistance.innerText = `${data.distance} km (Flight)`;

        // 2. Get Marker Position
        const markerX = marker.offsetLeft;
        const markerY = marker.offsetTop;

        // 3. Move Card Near Marker (20px offset)
        infoCard.style.left = `${markerX + 20}px`;
        infoCard.style.top = `${markerY + 20}px`;

        // 4. Show Card
        infoCard.classList.add('active');
        
        // Highlight active marker
        markers.forEach(m => m.style.opacity = '0.5');
        marker.style.opacity = '1';
    });
});

// Close Card
closeCardBtn.addEventListener('click', () => {
    infoCard.classList.remove('active');
    markers.forEach(m => m.style.opacity = '1');
});