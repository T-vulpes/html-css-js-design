function toggleForm() {
  const formTitle = document.getElementById("formTitle");
  const toggleText = document.getElementById("toggleText");
  const signupExtra = document.getElementById("signupExtra");

  if (formTitle.textContent === "Login") {
    formTitle.textContent = "Sign Up";
    signupExtra.style.display = "block";
    toggleText.innerHTML = 'Already have an account? <span onclick="toggleForm()">Login</span>';
  } else {
    formTitle.textContent = "Login";
    signupExtra.style.display = "none";
    toggleText.innerHTML = 'Don’t have an account? <span onclick="toggleForm()">Sign up</span>';
  }
}
