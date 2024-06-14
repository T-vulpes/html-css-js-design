document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let valid = true;

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('subjectError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Name validation
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        valid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address';
        valid = false;
    }

    // Phone validation
    const phone = document.getElementById('phone').value;
    const phonePattern = /^\+?[1-9]\d{1,14}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Invalid phone number';
        valid = false;
    }

    // Subject validation
    const subject = document.getElementById('subject').value;
    if (subject.trim() === '') {
        document.getElementById('subjectError').textContent = 'Subject is required';
        valid = false;
    }

    // Message validation
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        valid = false;
    }

    // If form is valid, show an alert (or perform any other actions)
    if (valid) {
        alert('Thank you for contacting us!');
        document.getElementById('contactForm').reset();
    }
});

function initMap() {
    const location = { lat: -34.397, lng: 150.644 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
