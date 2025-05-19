const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('fullscreen-menu');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  menu.classList.toggle('open');
});
