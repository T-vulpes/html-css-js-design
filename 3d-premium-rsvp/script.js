const tiltContainer = document.getElementById('tilt-container');
const wrapper = document.querySelector('.invitation-wrapper');
const inviteCard = document.getElementById('invite-card');
const openRsvpBtn = document.getElementById('open-rsvp');
const closeRsvpBtn = document.getElementById('close-rsvp');
const submitBtn = document.getElementById('submit-btn');
tiltContainer.addEventListener('mousemove', (e) => {
    const rect = tiltContainer.getBoundingClientRect();    
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;   
    wrapper.style.transform = `rotateX(${-y / 20}deg) rotateY(${x / 20}deg)`;
});

tiltContainer.addEventListener('mouseleave', () => {
    wrapper.style.transition = "transform 0.5s ease"; 
    wrapper.style.transform = `rotateX(0deg) rotateY(0deg)`;
    setTimeout(() => {
        wrapper.style.transition = "transform 0.1s ease-out";
    }, 500);
});

openRsvpBtn.addEventListener('click', () => {
    inviteCard.classList.add('is-flipped');
});

closeRsvpBtn.addEventListener('click', () => {
    inviteCard.classList.remove('is-flipped');
});

submitBtn.addEventListener('click', () => {
    const form = document.getElementById('rsvp-form');
    if(form.checkValidity()) {
        submitBtn.innerText = "Confirmed ✓";
        submitBtn.style.background = "#fff";
        setTimeout(() => {
            inviteCard.classList.remove('is-flipped');
            setTimeout(() => {
                submitBtn.innerText = "Confirm";
                submitBtn.style.background = "#d4af37";
                form.reset();
            }, 800);
        }, 1500);
    } else {
        form.reportValidity(); 
    }
});