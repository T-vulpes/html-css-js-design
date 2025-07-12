function toggleTheme() {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
}

function toggleCollapse() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');
}

function toggleSubmenu(item) {
  item.classList.toggle('open');
}
