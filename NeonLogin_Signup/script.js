const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
  container.classList.add('right-panel-active')
);

signInButton.addEventListener('click', () =>
  container.classList.remove('right-panel-active')
);

const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const emailValue = emailInput.value;
  if (!emailValue.match(/[^ @]*@[^ @]*/)) {
    emailError.textContent = 'Please enter a valid email address.';
    emailError.style.display = 'block';
  } else {
    emailError.style.display = 'none';
    alert('Form submitted successfully!');
  }
});
