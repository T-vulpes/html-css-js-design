const plusBtn = document.getElementById("plusBtn");
const extraMenu = document.getElementById("extraMenu");
const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");
const searchInput = document.getElementById("searchInput");
const voiceBtn = document.getElementById("voiceBtn");
const sendBtn = document.getElementById("sendBtn");

plusBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  extraMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!extraMenu.contains(e.target) && e.target !== plusBtn) {
    extraMenu.classList.remove("active");
  }
});

document.getElementById("uploadImageBtn").addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById("shareLocationBtn").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      alert(`📍 Latitude: ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`);
    });
  } else {
    alert("Geolocation is not supported on this device.");
  }
});

document.getElementById("openCameraBtn").addEventListener("click", () => {
  alert("Opening camera (simulated) 📸");
});

voiceBtn.addEventListener("click", () => {
  if (!("webkitSpeechRecognition" in window)) {
    alert("Speech recognition not supported in this browser!");
    return;
  }
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();
  recognition.onresult = (event) => {
    searchInput.value = event.results[0][0].transcript;
  };
});

sendBtn.addEventListener("click", () => {
  const text = searchInput.value.trim();
  if (text) {
    alert(`🔍 You searched for: ${text}`);
    searchInput.value = "";
    preview.innerHTML = "";
  } else {
    alert("Please enter something before sending!");
  }
});



