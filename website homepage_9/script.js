const stars = document.querySelectorAll('.star');

stars.forEach(star => {
  let x = Math.random() * 10 - 5;
  let y = Math.random() * 10 - 5;
  setInterval(() => {
    star.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 20 - 10}deg)`;
  }, 3000);
});
