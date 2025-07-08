function showRegister() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("registerForm").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("registerForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}

function login() {
  const user = document.getElementById("loginUsername").value.trim();
  const pass = document.getElementById("loginPassword").value.trim();
  const msg = document.getElementById("loginMessage");

  const savedUser = localStorage.getItem("user");
  const savedPass = localStorage.getItem("pass");

  if (user === savedUser && pass === savedPass) {
    msg.style.color = "lightgreen";
    msg.textContent = "Welcome aboard!";
  } else {
    msg.style.color = "red";
    msg.textContent = "Access Denied.";
  }
}

function register() {
  const user = document.getElementById("regUsername").value.trim();
  const pass = document.getElementById("regPassword").value.trim();
  const msg = document.getElementById("registerMessage");

  if (user && pass) {
    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);
    msg.style.color = "lightgreen";
    msg.textContent = "Identity Created! You can now log in.";
  } else {
    msg.style.color = "red";
    msg.textContent = "Please enter both fields.";
  }
}
