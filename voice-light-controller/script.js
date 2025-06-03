const light = document.getElementById('light');
const statusText = document.getElementById('status');
const startButton = document.getElementById('start');

let recognition;

if ('webkitSpeechRecognition' in window) {
  recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US"; 
  recognition.continuous = true; 
  recognition.interimResults = false;

  recognition.onstart = () => {
    statusText.innerText = "Listening...";
  };

  recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
    console.log("Heard:", transcript); // Geliştiriciler için çıktı

    statusText.innerText = `Heard: "${transcript}"`;

    if (transcript.includes("on") || transcript.includes("turn on")) {
      light.style.backgroundColor = "white";
    } else if (transcript.includes("off") || transcript.includes("turn off")) {
      light.style.backgroundColor = "gray";
    } else if (transcript.includes("red")) {
      light.style.backgroundColor = "red";
    } else if (transcript.includes("green")) {
      light.style.backgroundColor = "green";
    } else if (transcript.includes("blue")) {
      light.style.backgroundColor = "blue";
    } else if (transcript.includes("yellow")) {
      light.style.backgroundColor = "yellow";
    } else if (transcript.includes("stop listening")) {
      recognition.stop();
      statusText.innerText = "Stopped listening.";
    } else {
      statusText.innerText += " (Unknown command)";
    }
  };

  recognition.onerror = (event) => {
    statusText.innerText = "Error: " + event.error;
  };

  recognition.onend = () => {
    // Stop listening komutu verilmediyse tekrar başlat
    if (statusText.innerText !== "Stopped listening.") {
      recognition.start();
    }
  };
} else {
  alert("Your browser doesn't support Speech Recognition.");
}

startButton.onclick = () => {
  if (recognition) recognition.start();
};
