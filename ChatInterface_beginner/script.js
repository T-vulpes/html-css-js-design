const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const typingIndicator = document.getElementById("typingIndicator");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, "user");
  userInput.value = "";

  typingIndicator.style.display = "block";

  setTimeout(() => {
    typingIndicator.style.display = "none";
    const botReply = getBotReply(message);
    addMessage(botReply, "bot");

    // Eğer kullanıcı "bye" dediyse konuşmayı sıfırla
    if (message.toLowerCase().includes("bye")) {
      setTimeout(resetChat, 2000); // 2 saniye bekle, sonra temizle
    }
  }, 1000);
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(userMsg) {
  const msg = userMsg.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hey there 👋! How are you today?";
  } 
  else if (msg.includes("how are you")) {
    return "I’m doing great, thanks for asking! 😊";
  }
  else if (msg.includes("what is your name")) {
    return "My name is NeonChat Assistant 🤖";
  }
  else if (msg.includes("who made you")) {
    return "I was created by a developer using HTML, CSS, and JavaScript 💻";
  }
  else if (msg.includes("bye")) {
    return "Goodbye 👋! Chat will reset shortly...";
  }
  else {
    return "Hmm, I’m not sure about that yet 😅";
  }
}

// Konuşmayı sıfırlayan fonksiyon
function resetChat() {
  chatBox.innerHTML = ""; // tüm mesajları temizle
  addMessage("Hello 👋, how can I help you today?", "bot");
}
