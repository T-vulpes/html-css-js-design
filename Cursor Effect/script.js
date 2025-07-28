const colors = ['#ff3c38', '#00f0ff', '#47ff58', '#fffc00', '#ff00ea'];
const cursorDot = document.getElementById("cursorDot");

document.addEventListener("mousemove", (e) => {
  // Update cursor
  cursorDot.style.left = `${e.clientX - 5}px`;
  cursorDot.style.top = `${e.clientY - 5}px`;

  // Create particles
  for (let i = 0; i < 5; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = color;
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;

    const x = (Math.random() - 0.5) * 100;
    const y = (Math.random() - 0.5) * 100;
    particle.style.setProperty('--x', `${x}px`);
    particle.style.setProperty('--y', `${y}px`);

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 700);
  }
});
